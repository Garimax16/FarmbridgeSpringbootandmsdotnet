using Microsoft.AspNetCore.Mvc;
using FarmBridge.Data;
using FarmBridge.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;

namespace FarmBridge.Controllers
{
    public class CropController:Controller
    {
        private readonly AppDbContext _context;
      
        public CropController(AppDbContext context)
        {
            _context = context;
            
        }

        // GET: Farmer

       
        public IActionResult Index()
        {
            var crops = _context.Crops
                .Include(c => c.Farmer)
                .ToList();
            return View(crops);
        }



        // GET: Crop/Create
        public IActionResult Create()
        {
            ViewBag.Farmers = _context.Farmers.ToList();
            return View();
        }

        // POST: Crop/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(Crops crop, IFormFile? imageFile)
        {
            if (ModelState.IsValid)
            {
                if (imageFile != null && imageFile.Length > 0)
                {
                    using (var memoryStream = new MemoryStream())
                    {
                        imageFile.CopyTo(memoryStream);
                        crop.Image = memoryStream.ToArray();
                    }
                }

                _context.Crops.Add(crop);
                _context.SaveChanges();
                return RedirectToAction(nameof(Index));
            }

            ViewBag.Farmers = _context.Farmers.ToList();
            return View(crop);
        }

        // GET: Crop/Edit/5
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var crop = _context.Crops.Find(id);
            if (crop == null)
            {
                return NotFound();
            }

            ViewBag.Farmers = _context.Farmers.ToList();
            return View(crop);
        }

        // POST: Crop/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, Crops crop, IFormFile? imageFile)
        {
            if (id != crop.CropID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    if (imageFile != null && imageFile.Length > 0)
                    {
                        using (var memoryStream = new MemoryStream())
                        {
                            imageFile.CopyTo(memoryStream);
                            crop.Image = memoryStream.ToArray();
                        }
                    }
                    else
                    {
                        var existingCrop = _context.Crops.AsNoTracking()
                            .FirstOrDefault(c => c.CropID == id);
                        if (existingCrop != null)
                        {
                            crop.Image = existingCrop.Image;
                        }
                    }

                    _context.Update(crop);
                    _context.SaveChanges();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!CropExists(crop.CropID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            ViewBag.Farmers = _context.Farmers.ToList();
            return View(crop);
        }

        // GET: Crop/Delete/5
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var crop = _context.Crops
                .Include(c => c.Farmer)
                .FirstOrDefault(m => m.CropID == id);

            if (crop == null)
            {
                return NotFound();
            }

            return View(crop);
        }

        // POST: Crop/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var crop = _context.Crops.Find(id);
            if (crop != null)
            {
                _context.Crops.Remove(crop);
                _context.SaveChanges();
            }

            return RedirectToAction(nameof(Index));
        }

        private bool CropExists(int id)
        {
            return _context.Crops.Any(e => e.CropID == id);
        }
    }
}

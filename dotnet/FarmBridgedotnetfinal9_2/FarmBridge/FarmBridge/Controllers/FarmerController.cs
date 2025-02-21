//using CropManagement.DTO;
using FarmBridge.Models;
//using CropManagement.Services;
using FarmBridge.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Routing;
using Microsoft.EntityFrameworkCore;
using FarmBridge.DTO;
using FarmBridge.Services;
using FarmBridge.Dtos;
namespace FarmBridge.Controllers
{
    

    public class FarmerController : Controller
    {
        private readonly AppDbContext _context;
        private IFarmerService farmerService;
        private readonly IOtpService _otpService;

        private static Dictionary<string, string> _otpStorage = new Dictionary<string, string>(); // Temporary in-memory OTP storage

        public FarmerController(AppDbContext context,IFarmerService farmer, IOtpService otpService)
        {
            _context = context;
            farmerService = farmer;
            _otpService = otpService; 

        }

        // GET: Farmer
        
        public IActionResult Index()
        {
            var farmers = _context.Farmers.ToList();
            return View(farmers);
        }

        // GET: Farmer/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Farmer/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
       
        public IActionResult Create(Farmer farmer)
        {
            if (ModelState.IsValid)
            {
                _context.Farmers.Add(farmer);
                _context.SaveChanges();
                return RedirectToAction("Login");
            }
            return View(farmer);
        }

        // GET: Farmer/Edit/5
        //[Helper.Authorize]
        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var farmer = _context.Farmers.Find(id);
            if (farmer == null)
            {
                return NotFound();
            }
            return View(farmer);
        }

        // POST: Farmer/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        //[Helper.Authorize]
        public IActionResult Edit(int id, Farmer farmer)
        {
            if (id != farmer.FarmerID)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(farmer);
                    _context.SaveChanges();
                    return RedirectToAction(nameof(Index));
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!FarmerExists(farmer.FarmerID))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }
            return View(farmer);
        }

        // GET: Farmer/Delete/5
        //[Helper.Authorize]
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var farmer = _context.Farmers
                .FirstOrDefault(m => m.FarmerID == id);
            if (farmer == null)
            {
                return NotFound();
            }

            return View(farmer);
        }

        // POST: Farmer/Delete/5
        [HttpPost, ActionName("Delete")]
        //[Helper.Authorize]
        [ValidateAntiForgeryToken]
        public IActionResult DeleteConfirmed(int id)
        {
            var farmer = _context.Farmers.Find(id);
            if (farmer != null)
            {
                _context.Farmers.Remove(farmer);
                _context.SaveChanges();
            }
            return RedirectToAction(nameof(Index));
        }

        private bool FarmerExists(int id)
        {
            return _context.Farmers.Any(e => e.FarmerID == id);
        }



        public IActionResult Login()
        {
            return View(new FarmerAuthenticateRequest());

        }



        [HttpPost]

        public async Task<IActionResult> Login(FarmerAuthenticateRequest model)
        {
            var response = farmerService.Authenticate(model);
            if (response == null)
            {
                return RedirectToAction("Login", "Farmer");
            }

            var otp = _otpService.GenerateOtp();
            _otpStorage[model.Email] = otp; // Store OTP temporarily

            await _otpService.SendEmailAsync(model.Email, otp); // Send OTP to the user

            return RedirectToAction("VerifyOtp", new { email = model.Email });


            
        }
        [HttpGet]
        public IActionResult VerifyOtp(string email)
        {
            var model = new OtpVerificationDTO { Email = email };
            return View(model);
        }

        [HttpPost]
        public IActionResult VerifyOtp(OtpVerificationDTO model)
        {
            if (_otpStorage.ContainsKey(model.Email) && _otpStorage[model.Email] == model.OTP)
            {
                _otpStorage.Remove(model.Email);
                return RedirectToAction("Index","Crop");
            }

            ModelState.AddModelError("", "Invalid OTP or OTP expired.");
            return View(model);
        }

    }
}

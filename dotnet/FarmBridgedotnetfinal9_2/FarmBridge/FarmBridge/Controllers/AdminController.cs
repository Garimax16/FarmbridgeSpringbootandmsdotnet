
using System.ComponentModel.DataAnnotations;
using FarmBridge;
using FarmBridge.Data;
using FarmBridge.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FarmBridge.Controllers
{
    public class AdminController : Controller
    {
        private readonly AppDbContext _context;
        


        public AdminController(AppDbContext context)
        {
            _context = context;
            
        }

        // GET: Admin/Login
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

        // POST: Admin/Login
        [HttpPost]
        public IActionResult Login(AdminLoginModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }


            if (model.Username == "admin" && model.Password == "password123")
            {

                return RedirectToAction("AdminMenu");
            }


            ModelState.AddModelError("", "Invalid username or password.");
            return View(model);
        }

        // GETS Admin/Index
        public async Task<IActionResult> Index()
        {
            var crops = await _context.Crops.Include(c => c.Farmer).ToListAsync();
            return View(crops);
        }

        [HttpPost]
        public async Task<IActionResult> ApproveReject([FromBody] ApproveRejectRequest request)
        {
            if (request.Action != "approve" && request.Action != "reject")
            {
                return BadRequest(new { success = false, message = "Invalid action." });
            }

            var crop = await _context.Crops.FindAsync(request.Id);
            if (crop == null)
            {
                return NotFound(new { success = false, message = "Crop not found." });
            }

            crop.Status = request.Action == "approve" ? "APPROVED" : "REJECTED";

            try
            {
                _context.Update(crop);
                await _context.SaveChangesAsync();
                return Json(new { success = true, status = crop.Status });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error: {ex.Message}");
                return StatusCode(500, new { success = false, message = "Internal server error." });
            }



        }



        public IActionResult ProfileManagement()
        {
            // Redirect to the FarmerController's Index action
            return RedirectToAction("Index", "Farmer");
        }

        public IActionResult AdminMenu()
        {
            return View();
        }



    }

    public class ApproveRejectRequest
    {
        public int Id { get; set; }
        public string Action { get; set; } = string.Empty;
    }

    
    public class AdminLoginModel
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}

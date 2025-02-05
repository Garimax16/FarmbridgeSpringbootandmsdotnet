using FarmBridge.Data;
using FarmBridge.Dtos;
using FarmBridge.Models;
using FarmBridge.Sarvices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FarmBridge.Controllers
{

    public class BuyerController : Controller
    {
        private readonly IBuyerService _buyerService;

        private readonly AppDbContext _context;
        public BuyerController(IBuyerService buyerService, AppDbContext context)
        {
            _buyerService = buyerService;
            _context = context;

        }
        [Helper.Authorize]
        public IActionResult GetAll()
        {
            ICollection<Crops> crops = _context.Crops.ToList();
            return View(crops);
        }

        [HttpGet]
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(BuyerRegisterDto buyerRegisterDto)
        {
            var result = await _buyerService.Register(buyerRegisterDto);
            if (result == null)
            {
                ModelState.AddModelError(string.Empty, "Registration failed.");
                return View(buyerRegisterDto);
            }
            return RedirectToAction("Login");
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

      
        [HttpPost]
        public async Task<IActionResult> Login(BuyerLoginDto loginDto)
        {
            var result = await _buyerService.Login(loginDto.Email, loginDto.Password);
            if (result == null)
            {
                return BadRequest(new { message = "Invalid email or password." });
            }

            var token = _buyerService.GenerateJwtToken(result);
            return Ok(new { token });

        }


        [HttpGet]
        public async Task<IActionResult> BuyerExists(string email)
        {
            var exists = await _buyerService.BuyerExists(email);
            return Json(exists);
        }

        public IActionResult Index()
        {
            var buyers = _context.Buyers.ToList();
            return View(buyers);
        }
    }
}

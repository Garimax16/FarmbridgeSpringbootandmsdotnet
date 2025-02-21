using FarmBridge.Data;
using FarmBridge.Dtos;
using FarmBridge.Models;
using FarmBridge.Sarvices;
using FarmBridge.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Asn1.Ocsp;
using static Org.BouncyCastle.Crypto.Engines.SM2Engine;

namespace FarmBridge.Controllers
{

    public class BuyerController : Controller
    {
        private readonly IBuyerService _buyerService;

        private readonly AppDbContext _context;
        private readonly IOtpService _otpService;

        private static Dictionary<string, string> _otpStorage = new Dictionary<string, string>(); // Temporary in-memory OTP storage

        public BuyerController(IBuyerService buyerService, AppDbContext context, IOtpService otpService)
        {
            _buyerService = buyerService;
            _context = context;
            _otpService = otpService;

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

        public async Task<IActionResult> Register(BuyerRegisterDto buyerRegisterDto)
        {
            try
            {

                if (!ModelState.IsValid)
                {
                    return View(buyerRegisterDto);
                }

                var result = await _buyerService.Register(buyerRegisterDto);
                if (result == null)
                {
                    ModelState.AddModelError(string.Empty, "Registration failed.");
                    return View(buyerRegisterDto);
                }

                return RedirectToAction("Login");
            }
            catch (Exception ex)
            {
                ModelState.AddModelError(string.Empty, ex.Message);
                return View(buyerRegisterDto);
            }
        }

        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

      
        [HttpPost]
        public async Task<IActionResult> Login(BuyerLoginDto model)
        {
            var result = await _buyerService.Login(model.Email, model.Password);
            if (result == null)
            {
                return BadRequest(new { message = "Invalid email or password." });
            }

            //var token = _buyerService.GenerateJwtToken(result);
            var otp = _otpService.GenerateOtp();

            _otpStorage[model.Email] = otp;
               // Store OTP temporarily

            await _otpService.SendEmailAsync(model.Email, otp); // Send OTP to the user

            return RedirectToAction("VerifyOtp",new { email = model.Email });
            

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
                return RedirectToAction("GetAll");
            }

            ModelState.AddModelError("", "Invalid OTP or OTP expired.");
            return View(model);
        }
}}

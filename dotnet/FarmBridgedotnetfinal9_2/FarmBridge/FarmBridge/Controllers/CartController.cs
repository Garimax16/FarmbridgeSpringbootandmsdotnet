//using Microsoft.AspNetCore.Mvc;
//using FarmBridge.Models;
//using FarmBridge.Data;
//using Microsoft.EntityFrameworkCore;
//using Stripe;

//namespace FarmBridge.Controllers
//{
//    public class CartController : Controller
//    {
//        private const string StripeSecretKey = "sk_test_51QpmRxECwuXwqClKpk3Q414ZRVZ7CO89IZk4VMvf08rpmsUSTHwiWg0H2yTxUQBv6KsxQEvNNxAQ248AUD1letc100gWzof4wP";

//        private readonly AppDbContext _context;

//        public CartController(AppDbContext context)
//        {
//            _context = context;
//            StripeConfiguration.ApiKey = StripeSecretKey;
//        }

//        [HttpPost]
//        public IActionResult AddToCart(int cropId, int quantity)
//        {
//            if (quantity <= 0)
//            {
//                return BadRequest("Quantity must be greater than 0.");
//            }

//            var crop = _context.Crops.FirstOrDefault(c => c.CropID == cropId);
//            if (crop == null)
//            {
//                return NotFound("Crop not found.");
//            }

//            int buyerId = GetBuyerId();
//            if (buyerId == 0)
//            {
//                return Unauthorized("Please log in to add items to the cart.");
//            }

//            var cart = _context.Carts.FirstOrDefault(c => c.BuyerID == buyerId) ?? new Cart { BuyerID = buyerId };

//            if (cart.CartID == 0) _context.Carts.Add(cart);

//            var cartItem = _context.CartItems.FirstOrDefault(ci => ci.CartID == cart.CartID && ci.CropID == cropId);
//            if (cartItem != null)
//            {
//                cartItem.Quantity += quantity;
//                cartItem.Price = crop.Price * cartItem.Quantity;
//            }
//            else
//            {
//                cartItem = new CartItem
//                {
//                    CartID = cart.CartID,
//                    CropID = cropId,
//                    Quantity = quantity,
//                    Price = crop.Price * quantity
//                };
//                _context.CartItems.Add(cartItem);
//            }

//            _context.SaveChanges();
//            return RedirectToAction("Index", "Cart");
//        }

//        public IActionResult Index()
//        {
//            int buyerId = GetBuyerId();
//            var cart = _context.Carts.Include(c => c.CartItems).ThenInclude(ci => ci.Crop).FirstOrDefault(c => c.BuyerID == buyerId);

//            if (cart == null || !cart.CartItems.Any())
//            {
//                ViewBag.Message = "Your cart is empty.";
//                return View(new List<CartItem>());
//            }

//            return View(cart.CartItems);
//        }

//        public IActionResult RemoveFromCart(int id)
//        {
//            var cartItem = _context.CartItems.Find(id);
//            if (cartItem == null)
//            {
//                return NotFound();
//            }

//            _context.CartItems.Remove(cartItem);
//            _context.SaveChanges();

//            return RedirectToAction("Index");
//        }

//        public IActionResult Checkout()
//        {
//            int buyerId = GetBuyerId();
//            var cart = _context.Carts.Include(c => c.CartItems).ThenInclude(ci => ci.Crop).FirstOrDefault(c => c.BuyerID == buyerId);

//            if (cart == null || !cart.CartItems.Any())
//            {
//                ViewBag.Message = "Your cart is empty.";
//                return RedirectToAction("Index");
//            }

//            return RedirectToAction("Checkout", "Checkout", new { cartId = cart.CartID });
//        }

//        private int GetBuyerId()
//        {
//            return 1; // Replace with real authentication logic
//        }
//    }
////}
//using Microsoft.AspNetCore.Mvc;
//using FarmBridge.Models;
//using FarmBridge.Data;
//using Microsoft.EntityFrameworkCore;
//using Stripe;

//namespace FarmBridge.Controllers
//{
//    public class CartController : Controller
//    {
//        private const string StripeSecretKey = "sk_test_51QpmRxECwuXwqClKpk3Q414ZRVZ7CO89IZk4VMvf08rpmsUSTHwiWg0H2yTxUQBv6KsxQEvNNxAQ248AUD1letc100gWzof4wP";

//        private readonly AppDbContext _context;

//        public CartController(AppDbContext context)
//        {
//            _context = context;
//            StripeConfiguration.ApiKey = StripeSecretKey;
//        }

//        [HttpPost]
//        public IActionResult AddToCart(int cropId, int quantity)
//        {
//            if (quantity <= 0)
//            {
//                return BadRequest("Quantity must be greater than 0.");
//            }

//            var crop = _context.Crops.FirstOrDefault(c => c.CropID == cropId);
//            if (crop == null)
//            {
//                return NotFound("Crop not found.");
//            }

//            int buyerId = GetBuyerId();
//            if (buyerId == 0)
//            {
//                return Unauthorized("Please log in to add items to the cart.");
//            }

//            // Ensure the cart exists and has a valid ID
//            var cart = _context.Carts.FirstOrDefault(c => c.BuyerID == buyerId);
//            if (cart == null)
//            {
//                cart = new Cart { BuyerID = buyerId };
//                _context.Carts.Add(cart);
//                _context.SaveChanges(); // Ensures CartID is generated
//            }

//            // Reload the cart to ensure CartID is valid
//            cart = _context.Carts.FirstOrDefault(c => c.BuyerID == buyerId);

//            var cartItem = _context.CartItems.FirstOrDefault(ci => ci.CartID == cart.CartID && ci.CropID == cropId);
//            if (cartItem != null)
//            {
//                cartItem.Quantity += quantity;
//                cartItem.Price = crop.Price * cartItem.Quantity;
//            }
//            else
//            {
//                cartItem = new CartItem
//                {
//                    CartID = cart.CartID, // Ensure this is assigned
//                    CropID = cropId,
//                    Quantity = quantity,
//                    Price = crop.Price * quantity
//                };
//                _context.CartItems.Add(cartItem);
//            }

//            _context.SaveChanges();
//            return RedirectToAction("Index", "Cart");
//        }

//        public IActionResult Index()
//        {
//            int buyerId = GetBuyerId();
//            var cart = _context.Carts.Include(c => c.CartItems).ThenInclude(ci => ci.Crop).FirstOrDefault(c => c.BuyerID == buyerId);

//            if (cart == null || !cart.CartItems.Any())
//            {
//                ViewBag.Message = "Your cart is empty.";
//                return View(new List<CartItem>());
//            }

//            return View(cart.CartItems);
//        }

//        public IActionResult RemoveFromCart(int id)
//        {
//            var cartItem = _context.CartItems.Find(id);
//            if (cartItem == null)
//            {
//                return NotFound();
//            }

//            _context.CartItems.Remove(cartItem);
//            _context.SaveChanges();

//            return RedirectToAction("Index");
//        }

//        public IActionResult Checkout()
//        {
//            int buyerId = GetBuyerId();
//            var cart = _context.Carts.Include(c => c.CartItems).ThenInclude(ci => ci.Crop).FirstOrDefault(c => c.BuyerID == buyerId);

//            if (cart == null || !cart.CartItems.Any())
//            {
//                ViewBag.Message = "Your cart is empty.";
//                return RedirectToAction("Index");
//            }

//            return RedirectToAction("Checkout", "Checkout", new { cartId = cart.CartID });
//        }

//        private int GetBuyerId()
//        {
//            return 1; // Replace with real authentication logic
//        }
//    }
//}
using Microsoft.AspNetCore.Mvc;
using FarmBridge.Models;
using FarmBridge.Data;
using Microsoft.EntityFrameworkCore;

namespace FarmBridge.Controllers
{
    public class CartController : Controller
    {
        private readonly AppDbContext _context;

        public CartController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddToCart(int cropId, int quantity)
        {
            if (quantity <= 0)
            {
                return BadRequest("Quantity must be greater than 0.");
            }

            var crop = _context.Crops.FirstOrDefault(c => c.CropID == cropId);
            if (crop == null)
            {
                return NotFound("Crop not found.");
            }

            int buyerId = GetBuyerId();
            if (buyerId == 0)
            {
                return Unauthorized("Please log in to add items to the cart.");
            }

            var cart = _context.Carts.FirstOrDefault(c => c.BuyerID == buyerId);
            if (cart == null)
            {
                cart = new Cart { BuyerID = buyerId };
                _context.Carts.Add(cart);
                _context.SaveChanges();
            }

            var cartItem = _context.CartItems.FirstOrDefault(ci => ci.CartID == cart.CartID && ci.CropID == cropId);
            if (cartItem != null)
            {
                cartItem.Quantity += quantity;
                cartItem.Price = crop.Price * cartItem.Quantity;
            }
            else
            {
                cartItem = new CartItem
                {
                    CartID = cart.CartID,
                    CropID = cropId,
                    Quantity = quantity,
                    Price = crop.Price * quantity
                };
                _context.CartItems.Add(cartItem);
            }

            _context.SaveChanges();
            return RedirectToAction("Index");
        }

        public IActionResult Index()
        {
            int buyerId = GetBuyerId();
            var cart = _context.Carts
                .Include(c => c.CartItems)
                .ThenInclude(ci => ci.Crop)
                .FirstOrDefault(c => c.BuyerID == buyerId);

            if (cart == null || !cart.CartItems.Any())
            {
                ViewBag.Message = "Your cart is empty.";
                return View(new List<CartItem>());
            }

            ViewBag.CartId = cart.CartID; // ✅ Ensure Cart ID is passed to the view
            ViewBag.BuyerID = buyerId; // ✅ Ensure Buyer ID is passed to the view

            return View(cart.CartItems);
        }

        public IActionResult RemoveFromCart(int id)
        {
            var cartItem = _context.CartItems.Find(id);
            if (cartItem == null)
            {
                return NotFound();
            }

            _context.CartItems.Remove(cartItem);
            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        private int GetBuyerId()
        {
            return 1; // Replace with real authentication logic
        }
    }
}


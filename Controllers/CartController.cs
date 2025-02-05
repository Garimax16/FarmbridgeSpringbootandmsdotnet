using Microsoft.AspNetCore.Mvc;
using FarmBridge.Models;
using FarmBridge.Data;
using Microsoft.EntityFrameworkCore;
using System.Linq;

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

            // 🔴 Redirect to the cart page after adding an item
            return RedirectToAction("Index", "Cart");
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
public IActionResult Checkout()
{
    int buyerId = GetBuyerId();
    var cart = _context.Carts
        .Include(c => c.CartItems)
        .ThenInclude(ci => ci.Crop)
        .FirstOrDefault(c => c.BuyerID == buyerId);

    if (cart == null || !cart.CartItems.Any())
    {
        ViewBag.Message = "Your cart is empty.";
        return RedirectToAction("Index");
    }

    return View("Payment"); // Redirect to the payment page
}
[HttpPost]
public IActionResult ProcessPayment(string paymentMethod)
{
    if (string.IsNullOrEmpty(paymentMethod))
    {
        return BadRequest("Please select a payment method.");
    }

    // Simulate payment success
    return RedirectToAction("PaymentSuccess");
}

public IActionResult PaymentSuccess()
{
    return View();
}

        private int GetBuyerId()
        {
            // Replace this with actual authentication logic
            return 1; // Dummy value
        }
    }
}

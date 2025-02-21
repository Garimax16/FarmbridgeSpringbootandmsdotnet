


//using Stripe;
//using Stripe.Checkout;
//using FarmBridge.Data;
//using FarmBridge.Models;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using System.Linq;
//using System.Threading.Tasks;

//namespace FarmBridge.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class CheckoutController : ControllerBase
//    {
//        private readonly AppDbContext _context;
//        private readonly PaymentService _paymentService;

//        public CheckoutController(AppDbContext context, PaymentService paymentService)
//        {
//            _context = context;
//            _paymentService = paymentService;
//        }

//        [HttpPost]
//        public async Task<IActionResult> CreateCheckoutSession([FromForm] int cartId, [FromForm] int buyerId)
//        {
//            Console.WriteLine($"Received CartID: {cartId}, BuyerID: {buyerId}");

//            if (cartId == 0 || buyerId == 0) return BadRequest("Invalid cart or buyer ID.");

//            var cartItems = await _context.CartItems
//                .Where(ci => ci.CartID == cartId)
//                .Include(ci => ci.Crop)
//                .ToListAsync();

//            Console.WriteLine($"Cart Items Found: {cartItems.Count}");

//            if (!cartItems.Any()) return NotFound("Your cart is empty.");

//            string sessionUrl = _paymentService.CreateStripeSession(
//                cartItems,
//                Url.Action("Success", "Checkout", new { buyerId, cartId }, Request.Scheme),
//                Url.Action("Cancel", "Checkout", null, Request.Scheme)
//            );

//            return Ok(new { Url = sessionUrl });
//        }



//        [HttpGet("Success")]
//        public async Task<IActionResult> Success(int buyerId, int cartId)
//        {
//            // Create a new order
//            var order = new Order
//            {
//                BuyerID = buyerId,

//            };
//            _context.Orders.Add(order);
//            await _context.SaveChangesAsync(); // Generate OrderID

//            // Fetch cart items and save to OrderDetails
//            var cartItems = await _context.CartItems
//                .Where(ci => ci.CartID == cartId)
//                .Include(ci => ci.Crop)
//                .ToListAsync();

//            foreach (var item in cartItems)
//            {
//                var orderDetails = new OrderDetails
//                {
//                    OrderID = order.OrderID,
//                    CropName = item.Crop.Name,
//                    Quantity = item.Quantity.ToString(),
//                    Date = DateTime.UtcNow,

//                    BuyerID = buyerId
//                };
//                _context.OrderDetails.Add(orderDetails);
//            }
//            await _context.SaveChangesAsync();

//            // Clear cart after successful order placement
//            _context.CartItems.RemoveRange(cartItems);
//            await _context.SaveChangesAsync();

//            return Ok(new { Message = "Order placed successfully!", OrderID = order.OrderID });
//        }

//        [HttpGet("Cancel")]
//        public IActionResult Cancel()
//        {
//            return BadRequest(new { Message = "Payment was canceled." });
//        }
//    }
//}


using Microsoft.AspNetCore.Mvc;
using Stripe;
using Stripe.Checkout;
using FarmBridge.Data;
using FarmBridge.Models;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace FarmBridge.Controllers
{
    public class CheckoutController : Controller
    {
        private readonly AppDbContext _context;
        private readonly PaymentService _paymentService;

        public CheckoutController(AppDbContext context)
        {
            _context = context;
            _paymentService = new PaymentService();
        }

        [HttpPost]
        public async Task<IActionResult> CreateCheckoutSession(int cartId)
        {
            var cartItems = await _context.CartItems
                .Where(ci => ci.CartID == cartId)
                .Include(ci => ci.Crop)
                .ToListAsync();

            if (!cartItems.Any()) return NotFound("Your cart is empty.");

            string sessionUrl = _paymentService.CreateStripeSession(
                cartItems,
                Url.Action("Success", "Checkout", null, Request.Scheme),
                Url.Action("Cancel", "Checkout", null, Request.Scheme)
            );

            return Redirect(sessionUrl);
        }

        [HttpPost]
        public async Task<IActionResult> Webhook()
        {
            var json = await new System.IO.StreamReader(Request.Body).ReadToEndAsync();
            try
            {
                var stripeEvent = EventUtility.ConstructEvent(
                    json,
                    Request.Headers["Stripe-Signature"],
                    "your_webhook_secret"
                );

                if (stripeEvent.Type == "checkout.session.completed")
                {
                    var session = stripeEvent.Data.Object as Session;

                    if (session != null)
                    {
                        await SaveOrderToDatabase(session);
                    }
                }

                return Ok();
            }
            catch (StripeException e)
            {
                return BadRequest($"Stripe Webhook Error: {e.Message}");
            }
        }

        private async Task SaveOrderToDatabase(Session session)
        {
            var cartId = int.Parse(session.Metadata["cartId"]);

            var cartItems = await _context.CartItems
                .Where(ci => ci.CartID == cartId)
                .Include(ci => ci.Crop)
                .ToListAsync();

            var order = new Order
            {
                CartID = cartId,
                PaymentIntentId = session.PaymentIntentId,
                TotalAmount = (decimal)(session.AmountTotal / 100m), // Convert from cents to currency
                Status = "Paid",
                OrderItems = cartItems.Select(ci => new OrderItem
                {
                    CropID = ci.CropID,
                    Quantity = ci.Quantity,
                    Price = ci.Crop.Price
                }).ToList()
            };

            _context.Orders.Add(order);
            _context.CartItems.RemoveRange(cartItems); // Clear cart after successful purchase
            await _context.SaveChangesAsync();
        }

        public IActionResult Success()
        {
            return View();
        }

        public IActionResult Cancel()
        {
            return View();
        }
    }
}




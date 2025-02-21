////using FarmBridge.Data;
////using FarmBridge.Models;
////using Microsoft.AspNetCore.Mvc;

////namespace FarmBridge.Controllers
////{
////    public class OrderController : Controller
////    {
////        private readonly AppDbContext _context;

////        public OrderController(AppDbContext context)
////        {
////            _context = context;
////        }

////       [HttpPost]
////public IActionResult CreateOrder(string CropName, string Quantity, int FarmerID, int BuyerID)
////{
////    // Check if BuyerID exists in the Buyers table
////    var buyer = _context.Buyers.FirstOrDefault(b => b.BuyerId == BuyerID);
////    if (buyer == null)
////    {
////        TempData["Error"] = "Invalid Buyer ID. Please try again.";
////        return RedirectToAction("Index", "Cart");
////    }

////    // Create the order
////    var order = new OrderDetails
////    {
////        CropName = CropName,
////        Quantity = Quantity,
////        Date = DateTime.Now,
////        FarmerID = FarmerID,
////        BuyerID = BuyerID // Foreign key for the buyer
////    };

////    _context.OrderDetails.Add(order);
////    _context.SaveChanges();

////    TempData["Message"] = "Order created successfully!";
////    return RedirectToAction("Index", "Cart");
////}
////    }
////}
//using FarmBridge.Models;
//using FarmBridge.Services;
//using Microsoft.AspNetCore.Mvc;
//using System.Collections.Generic;

//namespace FarmBridge.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class OrderController : ControllerBase
//    {
//        private readonly IOrderService _orderService;

//        public OrderController(IOrderService orderService)
//        {
//            _orderService = orderService;
//        }

//        [HttpPost("placeOrder")]
//        public IActionResult PlaceOrder(int buyerId, int farmerId, [FromBody] List<(string CropName, string Quantity)> crops)
//        {
//            if (crops == null || crops.Count == 0)
//            {
//                return BadRequest("Crop list cannot be empty.");
//            }

//            var order = _orderService.PlaceOrder(buyerId, farmerId, crops);
//            return Ok(new { Message = "Order placed successfully!", Order = order });
//        }

//        [HttpGet("getOrders")]
//        public IActionResult GetOrders()
//        {
//            var orders = _orderService.GetAllOrders();
//            return Ok(orders);
//        }

//        [HttpGet("getOrder/{orderId}")]
//        public IActionResult GetOrderById(int orderId)
//        {
//            var order = _orderService.GetOrderById(orderId);
//            if (order == null)
//            {
//                return NotFound("Order not found.");
//            }
//            return Ok(order);
//        }
//    }
//}


using FarmBridge.Data;
using FarmBridge.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace FarmBridge.Controllers
{
    
    public class PlaceOrderRequest
    {
        public int BuyerId { get; set; }
        public List<CropRequest> Crops { get; set; }
    }

    public class CropRequest
    {
        public int CropId { get; set; }
        public int Quantity { get; set; }
    }
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly AppDbContext _context;

        public OrderController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("placeOrder")]
        public IActionResult PlaceOrder([FromForm] PlaceOrderRequest request)
        {
            if (request.Crops == null || request.Crops.Count == 0)
            {
                return BadRequest(new { Title = "Bad Request", Detail = "Crop list cannot be empty." });
            }

            // Validate buyer
            var buyer = _context.Buyers.FirstOrDefault(b => b.BuyerId == request.BuyerId);
            if (buyer == null)
            {
                return BadRequest(new { Title = "Bad Request", Detail = "Invalid Buyer ID." });
            }

            // Process crops
            var orderItems = new List<OrderItem>();
            decimal totalAmount = 0;

            foreach (var crop in request.Crops)
            {
                var cart = _context.Carts.FirstOrDefault(c => c.BuyerID == request.BuyerId);
                if (cart == null)
                {
                    return BadRequest(new { Title = "Bad Request", Detail = "Cart not found for the buyer." });
                }

                // Create and save the order
                var order = new Order
                {
                    BuyerID = request.BuyerId,
                    CartID = cart.CartID, // Link the order to the cart
                    TotalAmount = totalAmount,
                    Status = "Pending",
                    OrderItems = orderItems
                };

                _context.Orders.Add(order);
                _context.SaveChanges();

                // Create and save the order
            


            return Ok(new { Message = "Order placed successfully!", OrderId = order.OrderID });
        }

        [HttpGet("getOrders")]
        public IActionResult GetOrders()
        {
            var orders = _context.Orders.Include(o => o.OrderItems).ToList();
            return Ok(orders);
        }

        [HttpGet("getOrder/{orderId}")]
        public IActionResult GetOrderById(int orderId)
        {
            var order = _context.Orders
                .Include(o => o.OrderItems)
                .FirstOrDefault(o => o.OrderID == orderId);

            if (order == null)
            {
                return NotFound("Order not found.");
            }

            return Ok(order);
        }
    }
}
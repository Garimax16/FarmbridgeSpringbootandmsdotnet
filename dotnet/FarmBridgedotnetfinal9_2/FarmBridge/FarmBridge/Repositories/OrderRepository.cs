using FarmBridge.Data;
using FarmBridge.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace FarmBridge.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _context;

        public OrderRepository(AppDbContext context)
        {
            _context = context;
        }

        public Order CreateOrder(int buyerId, int farmerId)
        {
            var order = new Order
            {
                BuyerID = buyerId,
                FarmerID = farmerId,
                OrderDate = DateTime.UtcNow,
                Status = "Pending"
            };

            _context.Orders.Add(order);
            _context.SaveChanges();

            return order;
        }

        public OrderDetails CreateOrderDetail(int orderId, string cropName, int quantity, int farmerId, int buyerId)
        {
            var orderDetail = new OrderDetails
            {
                OrderID = orderId,
                CropName = cropName,
                Quantity = quantity,
                Date = DateTime.UtcNow,
                FarmerID = farmerId,
                BuyerID = buyerId,
                Price = 0 // Assuming price is set later
            };

            _context.OrderDetails.Add(orderDetail);
            _context.SaveChanges();

            return orderDetail;
        }

        public List<Order> GetOrders()
        {
            return _context.Orders.Include(o => o.OrderDetails).ToList();
        }

        public Order? GetOrderById(int orderId)
        {
            return _context.Orders.Include(o => o.OrderDetails)
                                  .FirstOrDefault(o => o.OrderID == orderId);
        }

        public void CreateOrderDetail(int orderID, string cropName, string quantity, int farmerId, int buyerId)
        {
            throw new NotImplementedException();
        }
    }
}

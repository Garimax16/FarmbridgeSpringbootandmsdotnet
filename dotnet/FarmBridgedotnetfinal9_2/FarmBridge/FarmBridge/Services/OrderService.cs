using FarmBridge.Models;
using FarmBridge.Repositories;
using System.Collections.Generic;

namespace FarmBridge.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;

        public OrderService(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public Order PlaceOrder(int buyerId, int farmerId, List<(string CropName, string Quantity)> crops)
        {
            var order = _orderRepository.CreateOrder(buyerId, farmerId);

            foreach (var crop in crops)
            {
                _orderRepository.CreateOrderDetail(order.OrderID, crop.CropName, crop.Quantity, farmerId, buyerId);
            }

            return order;
        }

        public List<Order> GetAllOrders()
        {
            return _orderRepository.GetOrders();
        }

        public Order? GetOrderById(int orderId)
        {
            return _orderRepository.GetOrderById(orderId);
        }
    }
}

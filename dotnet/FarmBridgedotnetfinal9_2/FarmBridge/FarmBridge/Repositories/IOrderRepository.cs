using FarmBridge.Models;

namespace FarmBridge.Repositories
{
    public interface IOrderRepository
    {
        Order CreateOrder(int buyerId, int farmerId);
        //OrderDetails CreateOrderDetail(int orderId, string cropName, string quantity, int farmerId, int buyerId);
        List<Order> GetOrders();
        Order? GetOrderById(int orderId);
        void CreateOrderDetail(int orderID, string cropName, string quantity, int farmerId, int buyerId);
    }
}

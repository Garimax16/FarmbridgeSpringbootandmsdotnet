using FarmBridge.Models;

namespace FarmBridge.Services
{
    public interface IOrderService
    {
        Order PlaceOrder(int buyerId, int farmerId, List<(string CropName, string Quantity)> crops);
        List<Order> GetAllOrders();
        Order? GetOrderById(int orderId);
    }
}

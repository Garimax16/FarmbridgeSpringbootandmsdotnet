using System.Collections.Generic;
using FarmBridge.Models;

namespace FarmBridge.Repositories
{
    public interface ICartRepository
    {
        void AddToCart(int cropId, int quantity);
        IEnumerable<CartItem> GetCartItems();
        void RemoveFromCart(int itemId);
        void ClearCart();
    }
}

using System.Collections.Generic;
using System.Linq;
using FarmBridge.Data;
using FarmBridge.Models;

namespace FarmBridge.Repositories
{
    public class CartRepository : ICartRepository
    {
        private readonly AppDbContext _context;

        public CartRepository(AppDbContext context)
        {
            _context = context;
        }

       public void AddToCart(int buyerId, int cropId, int quantity)
{
    var crop = _context.Crops.Find(cropId);
    if (crop == null || quantity <= 0) return;

    // Check if the buyer already has a cart
    var cart = _context.Carts.FirstOrDefault(c => c.BuyerID == buyerId);
    
    // If no cart exists, create one
    if (cart == null)
    {
        cart = new Cart { BuyerID = buyerId };
        _context.Carts.Add(cart);
        _context.SaveChanges(); // Save to generate CartID
    }

    var cartItem = _context.CartItems.FirstOrDefault(c => c.CropID == cropId && c.CartID == cart.CartID);

    if (cartItem != null)
    {
        cartItem.Quantity += quantity;
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
}

        public void AddToCart(int cropId, int quantity)
        {
            throw new NotImplementedException();
        }

        public void ClearCart()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<CartItem> GetCartItems()
        {
            throw new NotImplementedException();
        }

        public void RemoveFromCart(int itemId)
        {
            throw new NotImplementedException();
        }
    }
}

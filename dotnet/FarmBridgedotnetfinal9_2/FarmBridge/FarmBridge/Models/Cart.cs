using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FarmBridge.Models
{
    public class Cart
    {
        [Key]
        public int CartID { get; set; }

        public int BuyerID { get; set; } // Link cart to buyer

        // Navigation Property
        public virtual Buyer Buyer { get; set; }
    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>(); // Ensuring it's initialized
    }
}

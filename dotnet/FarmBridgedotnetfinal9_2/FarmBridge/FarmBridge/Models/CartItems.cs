using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FarmBridge.Models
{
    public class CartItem
    {
        [Key]
        public int ItemID { get; set; }

        [ForeignKey("Cart")]
        public int CartID { get; set; }  // Foreign Key to Cart

        [ForeignKey("Crop")]
        public int CropID { get; set; }  // Foreign Key to Crop

        public int Quantity { get; set; }
public float Price { get; set; }

        // Navigation Properties
        public virtual Cart Cart { get; set; }  // Now this is properly defined
        public virtual Crops Crop { get; set; }
    }
}

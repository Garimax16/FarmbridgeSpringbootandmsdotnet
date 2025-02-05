using FarmBridge.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FarmBridge.Models
{
    public class OrderDetails
    {
        [Key]
        public int OrderID { get; set; }

        [Required]
        [StringLength(255)]
        public string CropName { get; set; } = string.Empty;

        [Required]
        [StringLength(255)]
        public string Quantity { get; set; } = string.Empty;

        [Required]
        public DateTime Date { get; set; }

        [ForeignKey("Farmer")]
        public int FarmerID { get; set; }

        [ForeignKey("Buyer")]
        public int BuyerID { get; set; }

        // Navigation properties
        public virtual Farmer? Farmer { get; set; }
        public virtual Buyer? Buyer { get; set; }
    }
}

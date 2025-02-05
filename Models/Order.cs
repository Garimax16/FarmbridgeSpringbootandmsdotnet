using  FarmBridge.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace FarmBridge.Models
{
    public class Order
    {
        [Key]
        public int OrderID { get; set; }

        [ForeignKey("Buyer")]
        public int BuyerID { get; set; }

        [ForeignKey("Farmer")]
        public int FarmerID { get; set; }

        // Navigation properties
        public virtual Buyer? Buyer { get; set; }
        public virtual Farmer? Farmer { get; set; }
        public virtual ICollection<OrderDetails>? OrderDetails { get; set; }
    }
}

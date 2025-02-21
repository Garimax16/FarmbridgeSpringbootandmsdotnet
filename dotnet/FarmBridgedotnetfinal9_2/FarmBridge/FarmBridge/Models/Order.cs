//using System;
//using System.Collections.Generic;
//using System.ComponentModel.DataAnnotations;
//using System.ComponentModel.DataAnnotations.Schema;

//namespace FarmBridge.Models
//{
//    public class Order
//    {
//        [Key]
//        public int OrderID { get; set; }

//        [ForeignKey("Buyer")]
//        public int BuyerID { get; set; }

//        [ForeignKey("Farmer")]
//        public int FarmerID { get; set; }

//        [Required]
//        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

//        [Required]
//        [Column(TypeName = "decimal(18,2)")]
//        public decimal TotalAmount { get; set; }

//        [Required]
//        [StringLength(20)]
//        public string Status { get; set; } = "Pending"; // Default status

//        [StringLength(100)]
//        public string? PaymentIntentId { get; set; } // Stripe Payment ID

//        // Navigation properties
//        public virtual Buyer? Buyer { get; set; }
//        public virtual Farmer? Farmer { get; set; }
//        public virtual ICollection<OrderDetails>? OrderDetails { get; set; }
//        public object OrderItems { get; internal set; }
//        public int CartID { get; internal set; }
//    }
//}



using FarmBridge.Controllers;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

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

        [ForeignKey("Cart")] // Added Foreign Key for Cart
        public int CartID { get; set; }

        [Required]
        public DateTime OrderDate { get; set; } = DateTime.UtcNow;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal TotalAmount { get; set; }

        [Required]
        [StringLength(20)]
        public string Status { get; set; } = "Pending"; // Default status

        [StringLength(100)]
        public string? PaymentIntentId { get; set; } // Stripe Payment ID

        // Navigation properties
        public virtual Buyer? Buyer { get; set; }
        public virtual Farmer? Farmer { get; set; }
        public virtual Cart? Cart { get; set; } // Added Cart navigation property
        public virtual ICollection<OrderDetails>? OrderDetails { get; set; }
        internal List<OrderItem> OrderItems { get; set; }
    }
}

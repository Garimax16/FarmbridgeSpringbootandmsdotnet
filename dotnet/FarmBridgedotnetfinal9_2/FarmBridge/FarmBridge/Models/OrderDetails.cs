//using FarmBridge.Models;
//using System.ComponentModel.DataAnnotations.Schema;
//using System.ComponentModel.DataAnnotations;

//namespace FarmBridge.Models
//{
//    public class OrderDetails
//    {
//        [Key]
//        public int OrderID { get; set; }

//        [Required]
//        [StringLength(255)]
//        public string CropName { get; set; } = string.Empty;

//        [Required]
//        [StringLength(255)]
//        public string Quantity { get; set; } = string.Empty;

//        [Required]
//        public DateTime Date { get; set; }

//        [ForeignKey("Farmer")]
//        public int FarmerID { get; set; }

//        [ForeignKey("Buyer")]
//        public int BuyerID { get; set; }

//        // Navigation properties
//        public virtual Farmer? Farmer { get; set; }
//        public virtual Buyer? Buyer { get; set; }
//    }
//}



using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FarmBridge.Models
{
    public class OrderDetails
    {
        [Key]
        public int OrderDetailID { get; set; } // Primary Key

        [ForeignKey("Order")]
        public int OrderID { get; set; } // Foreign key to Order

        [Required]
        [StringLength(255)]
        public string CropName { get; set; } = string.Empty;

        [Required]
        public int Quantity { get; set; } // Changed from string to int

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; } // Added Price field

        [Required]
        public DateTime Date { get; set; }

        [ForeignKey("Farmer")]
        public int FarmerID { get; set; }

        [ForeignKey("Buyer")]
        public int BuyerID { get; set; }

        // Navigation properties
        public virtual Order? Order { get; set; }  // Added Order navigation property
        public virtual Farmer? Farmer { get; set; }
        public virtual Buyer? Buyer { get; set; }
    }
}

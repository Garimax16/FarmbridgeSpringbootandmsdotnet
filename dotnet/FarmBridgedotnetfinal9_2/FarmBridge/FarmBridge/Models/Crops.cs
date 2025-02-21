// using System.ComponentModel.DataAnnotations;
// using System.ComponentModel.DataAnnotations.Schema;

// namespace FarmBridge.Models
// {
//     public class Crops
//     {
//         [Key]
//         public int CropID { get; set; }

//         [Required(ErrorMessage = "The Name field is required.")]
//         [StringLength(100)]
//         [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Name can only contain letters and spaces")]
//         public string Name { get; set; } = string.Empty;

//         [Required(ErrorMessage = "The Season field is required.")]
//         [StringLength(50)]
//         [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Season can only contain letters and spaces")]
//         public string Season { get; set; } = string.Empty;

//         [Required(ErrorMessage = "The Quantity field is required.")]
//         [Range(0.1, float.MaxValue)]
//         public float Quantity { get; set; }

//         public byte[]? Image { get; set; }

//         [Required(ErrorMessage = "The Status field is required.")]
//         [StringLength(50)]
//         public string Status { get; set; } = string.Empty;

//         [ForeignKey("Farmer")]
//         public int FarmerID { get; set; }

//         [Required(ErrorMessage = "The Price field is required.")]
//         [Range(0.1, float.MaxValue)]
//         public float Price { get; set; }

//         // Navigation property
//         public virtual Farmer? Farmer { get; set; }
//         public object CartItems { get; internal set; }
        
//     }
// }


using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FarmBridge.Models
{
    public class Crops
    {
        [Key]
        public int CropID { get; set; }

        [Required(ErrorMessage = "The Name field is required.")]
        [StringLength(100)]
        [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Name can only contain letters and spaces")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "The Season field is required.")]
        [StringLength(50)]
        [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Season can only contain letters and spaces")]
        public string Season { get; set; } = string.Empty;

        [Required(ErrorMessage = "The Quantity field is required.")]
        [Range(0.1, float.MaxValue)]
        public float Quantity { get; set; }

        public byte[]? Image { get; set; }

        [Required(ErrorMessage = "The Status field is required.")]
        [StringLength(50)]
        public string Status { get; set; } = string.Empty;

        [ForeignKey("Farmer")]
        public int FarmerID { get; set; }

        [Required(ErrorMessage = "The Price field is required.")]
        [Range(0.1, float.MaxValue)]
        public float Price { get; set; }

        // Navigation property for Farmer
        public virtual Farmer? Farmer { get; set; }

        // Corrected navigation property for CartItems
        public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    }
}

using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using FarmBridge.Models;

namespace FarmBridge.Models
{
    public class Farmer
    {
        public int FarmerID { get; set; }

        [Required(ErrorMessage = "Full Name is required")]
        [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Name can only contain letters and spaces")]
        public string FullName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Address is required")]
        public string Address { get; set; } = string.Empty;

        [Required(ErrorMessage = "Contact Number is required")]
        [Phone(ErrorMessage = "Invalid Contact Number")]
        public string ContactNo { get; set; } = string.Empty;

        [Required(ErrorMessage = "Adhar Card Number is required")]
        [RegularExpression(@"^\d{12}$", ErrorMessage = "Adhar Card Number must be 12 digits")]
        public string AdharCardNo { get; set; } = string.Empty;

        [JsonIgnore]
        [Required(ErrorMessage = "Password is required")]
        [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be at least 6 characters long")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Email Address is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string EmailAddress { get; set; } = string.Empty;

        // Navigation property
        public virtual ICollection<Crops> Crops { get; set; } = new List<Crops>();
        public virtual ICollection<Order>? Orders { get; set; }
    }
}

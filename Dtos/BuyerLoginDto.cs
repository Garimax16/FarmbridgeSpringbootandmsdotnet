using System.ComponentModel.DataAnnotations;

namespace FarmBridge.Dtos
{
    public class BuyerLoginDto
    {
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email address.")]
        [StringLength(100, ErrorMessage = "Email cannot be longer than 100 characters.")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password is required.")]
        [StringLength(50, MinimumLength = 3, ErrorMessage = "Password must be between 3 and 50 characters.")]
        public string Password { get; set; }
    }
}
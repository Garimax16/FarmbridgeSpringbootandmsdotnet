using FarmBridge.Models;
using FarmBridge.Models;
using System.ComponentModel.DataAnnotations;

namespace FarmBridge.DTO
{
    public class FarmerAuthenticateResponse
    {

        public int FarmerID { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        [Required]
        public string Address { get; set; } = string.Empty;

        [Required]
        public string ContactNo { get; set; } = string.Empty;

        [Required]
        public string AdharCardNo { get; set; } = string.Empty;

        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; } = string.Empty;

        public virtual ICollection<Crops> Crops { get; set; } = new List<Crops>();
      
        public string Token { get; set; }
    
        public FarmerAuthenticateResponse(Farmer f, String token)
           {
            FarmerID = f.FarmerID;
            FullName = f.FullName;
            Address = f.Address;
            ContactNo = f.ContactNo;
            EmailAddress = f.EmailAddress;
            Token = token;
            }
 
    }
}

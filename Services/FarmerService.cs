using FarmBridge.Models;
using FarmBridge.DTO;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using FarmBridge.Helper;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;
using NuGet.Protocol;
using FarmBridge.Data;
using FarmBridge.Models;
using FarmBridge.DTO;
using FarmBridge.Services;

namespace FarmBridge.Services
{
    public class FarmerService : IFarmerService
    {


        private readonly AppSettings _appSettings;

        private readonly AppDbContext _context;

        public FarmerService(AppDbContext context,AppSettings appsettings)
        {
            _context = context;
            _appSettings= appsettings;
        }
        public FarmerAuthenticateResponse Authenticate(FarmerAuthenticateRequest model)
        {
            //ICollection<Farmer> f = _context.Farmers.ToList();
            Console.WriteLine(model.Email);
            Farmer farmer = _context.Farmers.FirstOrDefault(x=>x.EmailAddress ==model.Email.Trim() && x.Password==model.Password.Trim());
            if (farmer == null)
            {
                throw new NullReferenceException(nameof(farmer));
            }
            var token = generateJwtToken(farmer);
           
            return new FarmerAuthenticateResponse(farmer,token);

        }

        public string generateJwtToken(Farmer farmer)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor {
                Subject = new ClaimsIdentity(new[] { new Claim("id", farmer.FarmerID.ToString())}),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
            



        }
    }
}

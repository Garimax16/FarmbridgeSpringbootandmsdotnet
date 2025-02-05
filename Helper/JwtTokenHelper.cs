using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using FarmBridge.Models;
using Microsoft.IdentityModel.Tokens;


namespace FarmBridge.Helpers
{
    public class JwtTokenHelper
    {
        private readonly IConfiguration _configuration;

        public JwtTokenHelper(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string GenerateJwtToken(Buyer buyer)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_configuration["Jwt:Key"]);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                        new Claim(ClaimTypes.NameIdentifier, buyer.BuyerId.ToString()),
                        new Claim(ClaimTypes.Name, buyer.Name),
                        new Claim(ClaimTypes.Email, buyer.Email),
                        new Claim(ClaimTypes.MobilePhone, buyer.PhoneNo),
                        new Claim(ClaimTypes.StreetAddress, buyer.Address),
                        new Claim(ClaimTypes.Role, buyer.Role)
                    }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
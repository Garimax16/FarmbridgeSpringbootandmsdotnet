using AutoMapper;
using FarmBridge.Data;
using FarmBridge.Dtos;
using FarmBridge.Models;
using Microsoft.EntityFrameworkCore;

namespace FarmBridge.Repositories
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly AppDbContext _context;
        
        public BuyerRepository(AppDbContext context, IMapper mapper)
        {
            _context = context;
            
        }



        public async Task<Buyer> Register(string name, string email, string phoneNo, string address, string password)
        {
            if (await _context.Buyers.AnyAsync(b => b.Email == email))
                throw new Exception("Email already exists.");

            if (await _context.Buyers.AnyAsync(b => b.PhoneNo == phoneNo))
                throw new Exception("Phone number already exists.");

            var buyer = new Buyer
            {
                Name = name,
                Email = email,
                PhoneNo = phoneNo,
                Address = address,
                Password = BCrypt.Net.BCrypt.HashPassword(password),
            };

            _context.Buyers.Add(buyer);
            await _context.SaveChangesAsync();
            return buyer;
        }
        public async Task<Buyer> Login(string email, string password)
        {
            var buyer = await _context.Buyers.SingleOrDefaultAsync(x => x.Email == email);
            if (buyer == null || !BCrypt.Net.BCrypt.Verify(password, buyer.Password)) // Password check
                return null;

            return buyer;
        }


        public async Task<bool> BuyerExists(string email)
        {
            return await _context.Buyers.AnyAsync(b => b.Email == email);
        }
    }
}

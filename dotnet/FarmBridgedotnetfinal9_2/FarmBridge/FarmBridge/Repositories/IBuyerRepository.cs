using FarmBridge.Dtos;
using FarmBridge.Models;

namespace FarmBridge.Repositories
{
    public interface IBuyerRepository
    {
        Task<Buyer> Register(string name, string email, string phoneNo, string Address, string password);
        Task<Buyer> Login(string Email, string password);
        Task<bool> BuyerExists(string Email);
       
    }
}


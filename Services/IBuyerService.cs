using FarmBridge.Dtos;

namespace FarmBridge.Sarvices
{
    public interface IBuyerService
    {

        Task<BuyerDto> Register(BuyerRegisterDto buyerRegisterDto);
        Task<BuyerDto> Login(string Email, string password);
        string GenerateJwtToken(BuyerDto buyer);
        Task<bool> BuyerExists(string Email);
    }
}

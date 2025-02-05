using AutoMapper;
using FarmBridge.Dtos;
using FarmBridge.Helpers;
using FarmBridge.Models;
using FarmBridge.Repositories;
using Microsoft.AspNetCore.Identity;


namespace FarmBridge.Sarvices
{
    public class BuyerService : IBuyerService
    {
        private readonly IBuyerRepository _buyerRepository;
        private readonly IMapper _mapper;
        private readonly JwtTokenHelper _jwtTokenHelper;

        public BuyerService(IBuyerRepository buyerRepository, IMapper mapper, JwtTokenHelper jwtTokenHelper)
        {
            _buyerRepository = buyerRepository;
            _mapper = mapper;
            _jwtTokenHelper = jwtTokenHelper;
        }




        public async Task<BuyerDto> Register(BuyerRegisterDto buyerRegisterDto)
        {
            var buyer = _mapper.Map<Buyer>(buyerRegisterDto);
            var registeredBuyer = await _buyerRepository.Register(buyer.Name, buyer.Email, buyer.PhoneNo, buyer.Address, buyer.Password); //buyerRegisterDto.PasswordHash);
            return _mapper.Map<BuyerDto>(registeredBuyer);
        }

        public async Task<BuyerDto> Login(string email, string password)
        {
            var buyer = await _buyerRepository.Login(email, password);
            return buyer == null ? null : _mapper.Map<BuyerDto>(buyer);
        }

 
        public string GenerateJwtToken(BuyerDto buyer)
        {
            var buyerModel = _mapper.Map<Buyer>(buyer);
            return _jwtTokenHelper.GenerateJwtToken(buyerModel);
        }

        public async Task<bool> BuyerExists(string email)
        {
            return await _buyerRepository.BuyerExists(email);
        }
    }
}

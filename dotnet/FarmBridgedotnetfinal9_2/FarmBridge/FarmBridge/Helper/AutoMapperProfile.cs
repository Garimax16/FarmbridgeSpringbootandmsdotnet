//using AutoMapper;
//using MyWebApiProject.Dtos;
//using MyWebApiProject.Models;

//namespace MyWebApiProject.Helpers
//{
//    public class AutoMapperProfile : Profile
//    {
//        public AutoMapperProfile()
//        {
//            CreateMap<Product, ProductDto>();
//            CreateMap<ProductDto, Product>();
//            CreateMap<User, UserDto>();
//        }
//    }
//}
using AutoMapper;
using FarmBridge.Dtos;
using FarmBridge.Models;

namespace FarmBridge.Helpers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            // Define mappings
            CreateMap<Buyer, BuyerDto>().ReverseMap();
            CreateMap<BuyerRegisterDto, Buyer>();
            CreateMap<BuyerLoginDto, Buyer>();
           // CreateMap<Product, ProductDto>().ReverseMap();

        }
    }
}
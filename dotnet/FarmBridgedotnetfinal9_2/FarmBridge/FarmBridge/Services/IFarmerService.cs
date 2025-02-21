using FarmBridge.DTO;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;

namespace FarmBridge.Services
{
    public interface IFarmerService
    {
        public FarmerAuthenticateResponse Authenticate(FarmerAuthenticateRequest model);


    }
}

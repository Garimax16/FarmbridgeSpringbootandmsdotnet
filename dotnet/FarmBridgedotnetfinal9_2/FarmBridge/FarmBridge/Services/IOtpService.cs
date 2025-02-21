namespace FarmBridge.Services
{
    public interface IOtpService
    {
        string GenerateOtp();
       public  Task SendEmailAsync(string email, string otp);
    }
}

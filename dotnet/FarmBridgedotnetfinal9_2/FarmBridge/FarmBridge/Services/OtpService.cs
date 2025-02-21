using MimeKit;
using MailKit.Net.Smtp;
using MailKit.Security;


namespace FarmBridge.Services
{
    
public class OtpService : IOtpService
    {
        private readonly string _smtpServer;
        private readonly int _smtpPort;
        private readonly string _senderEmail;
        private readonly string _senderPassword;

        public OtpService()
        {
            _smtpServer = "smtp.gmail.com";
            _smtpPort = 587;
            _senderEmail = "singh9tanya@gmail.com";
            _senderPassword = "czzd kwpf yubw jdvs";
        }

        public string GenerateOtp()
        {
            Random random = new Random();
            return random.Next(100000, 999999).ToString();
        }

        public async Task SendEmailAsync(string email, string otp)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Your App", _senderEmail));
            message.To.Add(new MailboxAddress("", email));
            message.Subject = "Your OTP Code";

            // OTP Email Body
            message.Body = new TextPart("plain")
            {
                Text = $"Your OTP code is {otp}. It will expire in 5 minutes."
            };

            using (var smtpClient = new SmtpClient())
            {
                try
                {
                    smtpClient.ServerCertificateValidationCallback = (s, cert, chain, sslPolicyErrors) => true;
                    // Connect to SMTP server using STARTTLS
                    await smtpClient.ConnectAsync(_smtpServer, _smtpPort, SecureSocketOptions.StartTls);

                    // Authenticate with the sender email and password
                    await smtpClient.AuthenticateAsync(_senderEmail, _senderPassword);

                    // Send the email
                    await smtpClient.SendAsync(message);
                }
                catch (SmtpCommandException smtpEx)
                {
                    Console.WriteLine($"SMTP error occurred: {smtpEx.Message}");
                    
                    // Handle SMTP specific errors
                }
                catch (Exception ex)
                {
                    Console.WriteLine($"General error occurred: {ex.Message}");
                }
                finally
                {
                    // Disconnect and clean up
                    await smtpClient.DisconnectAsync(true);
                }
            }
        }


    }
}


using Stripe;
using Microsoft.Extensions.Configuration;
using Stripe.Checkout;

namespace FarmBridge.Services
{
    public class StripeService
    {
        private readonly IConfiguration _configuration;

        public StripeService(IConfiguration configuration)
        {
            _configuration = configuration;
            StripeConfiguration.ApiKey = _configuration["Stripe:sk_test_51QpmRxECwuXwqClKpk3Q414ZRVZ7CO89IZk4VMvf08rpmsUSTHwiWg0H2yTxUQBv6KsxQEvNNxAQ248AUD1letc100gWzof4wP"];
        }

        public Session CreateCheckoutSession(string successUrl, string cancelUrl, long amount)
        {
            var options = new SessionCreateOptions
            {
                PaymentMethodTypes = new List<string> { "card" },
                LineItems = new List<SessionLineItemOptions>
                {
                    new SessionLineItemOptions
                    {
                        PriceData = new SessionLineItemPriceDataOptions
                        {
                            Currency = "usd",
                            UnitAmount = amount, // Total amount in cents
                            ProductData = new SessionLineItemPriceDataProductDataOptions
                            {
                                Name = "Farm Products",
                            },
                        },
                        Quantity = 1,
                    }
                },
                Mode = "payment",
                SuccessUrl = successUrl,
                CancelUrl = cancelUrl,
            };

            var service = new SessionService();
            Session session = service.Create(options);
            return session;
        }
    }
}

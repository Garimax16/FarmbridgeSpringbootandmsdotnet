//using FarmBridge.Models;
//using Stripe.Checkout;

//public class PaymentService
//{
//    public string CreateStripeSession(IEnumerable<CartItem> cartItems, string successUrl, string cancelUrl)
//    {
//        var lineItems = cartItems.Select(item => new SessionLineItemOptions
//        {
//            PriceData = new SessionLineItemPriceDataOptions
//            {
//                Currency = "usd",
//                UnitAmount = (long)(item.Crop.Price * item.Quantity * 100), // Convert to cents
//                ProductData = new SessionLineItemPriceDataProductDataOptions
//                {
//                    Name = item.Crop.Name
//                }
//            },
//            Quantity = item.Quantity
//        }).ToList();

//        var options = new SessionCreateOptions
//        {
//            PaymentMethodTypes = new List<string> { "card" },
//            LineItems = lineItems,
//            Mode = "payment",
//            SuccessUrl = successUrl,
//            CancelUrl = cancelUrl
//        };

//        var service = new SessionService();
//        var session = service.Create(options);
//        return session.Url;
//    }
//}

//using FarmBridge.Models;
//using Stripe.Checkout;
//using System.Collections.Generic;
//using System.Linq;

//public class PaymentService
//{
//    public string CreateStripeSession(IEnumerable<CartItem> cartItems, string successUrl, string cancelUrl)
//    {
//        var lineItems = cartItems.Select(item => new SessionLineItemOptions
//        {
//            PriceData = new SessionLineItemPriceDataOptions
//            {
//                Currency = "usd",
//                UnitAmount = (long)(item.Crop.Price * item.Quantity * 100), // Convert to cents
//                ProductData = new SessionLineItemPriceDataProductDataOptions
//                {
//                    Name = item.Crop.Name
//                }
//            },
//            Quantity = item.Quantity
//        }).ToList();

//        var options = new SessionCreateOptions
//        {
//            PaymentMethodTypes = new List<string> { "card" },
//            LineItems = lineItems,
//            Mode = "payment",
//            SuccessUrl = successUrl,
//            CancelUrl = cancelUrl
//        };

//        var service = new SessionService();
//        var session = service.Create(options);
//        return session.Url;
//    }
//}
using Stripe;
using Stripe.Checkout;
using FarmBridge.Models;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;

public class PaymentService
{
    public PaymentService()
    {
    }

    public PaymentService(IConfiguration configuration)
    {
        // Read API Key from appsettings.json
        StripeConfiguration.ApiKey = configuration["Stripe:SecretKey"];
    }

    public string CreateStripeSession(IEnumerable<CartItem> cartItems, string successUrl, string cancelUrl)
    {
        var options = new SessionCreateOptions
        {
            PaymentMethodTypes = new List<string> { "card" },
            LineItems = cartItems.Select(item => new SessionLineItemOptions
            {
                PriceData = new SessionLineItemPriceDataOptions
                {
                    Currency = "inr", // Adjust currency if needed
                    UnitAmount = (long)(item.Price * 100), // Convert to minor units (paise)
                    ProductData = new SessionLineItemPriceDataProductDataOptions
                    {
                        Name = item.Crop.Name
                    }
                },
                Quantity = item.Quantity
            }).ToList(),
            Mode = "payment",
            SuccessUrl = successUrl,
            CancelUrl = cancelUrl
        };

        var service = new SessionService();
        var session = service.Create(options);

        return session.Url;
    }
}

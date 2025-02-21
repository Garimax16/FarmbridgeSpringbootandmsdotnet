// using FarmBridge.Helper;
// using FarmBridge.Services;
// using FarmBridge.Data;

// using FarmBridge.Helpers;
// using FarmBridge.Repositories;
// using FarmBridge.Sarvices;

// using Microsoft.AspNetCore.Authentication.JwtBearer;
// using Microsoft.EntityFrameworkCore;
// using Microsoft.IdentityModel.Tokens;
// using Microsoft.OpenApi.Models;
// using System.Text;
// using Stripe;

// var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddControllersWithViews();
// builder.Services.AddScoped<ICartRepository, CartRepository>();

// builder.Services.AddDbContext<AppDbContext>(options =>
//     options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"), 
//     new MySqlServerVersion(new Version(8, 0, 21))));


// builder.Services.AddAutoMapper(typeof(Program));
// builder.Logging.AddConsole();
// builder.Services.AddScoped<IBuyerRepository, BuyerRepository>();
// builder.Services.AddScoped<IBuyerService, BuyerService>();

// builder.Services.AddSingleton<JwtTokenHelper>();
// builder.Logging.AddConsole();
// builder.Services.AddSingleton<AppSettings>();
// builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));
// builder.Services.AddScoped<IFarmerService, FarmerService>();
// builder.Services.AddScoped<IOtpService, OtpService>();
// builder.Services.AddScoped<StripeService>();  

// builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
//     .AddJwtBearer(options =>
//     {
//         options.TokenValidationParameters = new TokenValidationParameters
//         {
//             ValidateIssuerSigningKey = true,
//             IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Key"])),
//             ValidateIssuer = false,
//             ValidateAudience = false
//         };
//     });

// builder.Services.AddSwaggerGen(c =>
// {
//     c.SwaggerDoc("v1", new OpenApiInfo { Title = "FarmBridge", Version = "v1" });
//     c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
//     {
//         Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
//         Name = "Authorization",
//         In = ParameterLocation.Header,
//         Type = SecuritySchemeType.ApiKey,
//         Scheme = "Bearer"
//     });
//     c.AddSecurityRequirement(new OpenApiSecurityRequirement{
//         {
//             new OpenApiSecurityScheme{
//                 Reference = new OpenApiReference{
//                     Type = ReferenceType.SecurityScheme,
//                     Id = "Bearer"
//                 }
//             },
//             new string[]{}
//         }
//     });
// });


// var app = builder.Build();

// if (!app.Environment.IsDevelopment())
// {
//     app.UseExceptionHandler("/Home/Error");
// }
// app.UseStaticFiles();
// app.UseMiddleware<JwtMiddleware>();
// app.UseRouting();
// app.UseAuthentication();
// StripeConfiguration.ApiKey=builder.Configuration.GetSection("Stripe:SecretKey").Get<string>();
// app.UseAuthorization();

// app.MapControllerRoute(
//     name: "default",
//     pattern: "{controller=Home}/{action=Index}/{id?}");

// app.Run();
using FarmBridge.Helper;
using FarmBridge.Services;
using FarmBridge.Data;
using FarmBridge.Helpers;
using FarmBridge.Repositories;
using FarmBridge.Sarvices;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Stripe;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

// Configure the database context with MySQL
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("DefaultConnection"),
    new MySqlServerVersion(new Version(8, 0, 21))));

// Register repositories and services
builder.Services.AddScoped<ICartRepository, CartRepository>();
builder.Services.AddScoped<IBuyerRepository, BuyerRepository>();
builder.Services.AddScoped<IBuyerService, BuyerService>();
builder.Services.AddScoped<IFarmerService, FarmerService>();
builder.Services.AddScoped<IOtpService, OtpService>();

builder.Services.AddScoped<IOrderRepository, OrderRepository>();
builder.Services.AddScoped<IOrderService, OrderService>();


// ✅ **Fixed: Register PaymentService with IConfiguration**
builder.Services.AddSingleton<PaymentService>(provider =>
    new PaymentService(provider.GetRequiredService<IConfiguration>()));

// Register AutoMapper
builder.Services.AddAutoMapper(typeof(Program));

// JWT Authentication configuration
builder.Services.AddSingleton<JwtTokenHelper>();
builder.Services.AddSingleton<AppSettings>();
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration["Jwt:Key"])),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

// Swagger configuration for API documentation
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "FarmBridge", Version = "v1" });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] { }
        }
    });
});

// ✅ **Fixed: Retrieve Stripe Secret Key Correctly**
StripeConfiguration.ApiKey = builder.Configuration["Stripe:SecretKey"];

// Add logging and middleware
builder.Logging.AddConsole();
builder.Services.AddLogging();

// Build the application
var app = builder.Build();

// Configure middleware and request pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}

app.UseStaticFiles(); // Serve static files like CSS, JS, images, etc.

// Custom middleware to handle JWT authentication
app.UseMiddleware<JwtMiddleware>();

app.UseRouting(); // Set up routing

// Enable authentication and authorization
app.UseAuthentication();
app.UseAuthorization();

// Map default route for MVC
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Enable Swagger UI for API documentation (optional, useful for APIs)
app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "FarmBridge API v1");
});

app.Run();

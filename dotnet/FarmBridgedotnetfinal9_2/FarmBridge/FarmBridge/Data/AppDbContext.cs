using  FarmBridge.Models;

using Microsoft.EntityFrameworkCore;


namespace FarmBridge.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Order> Orders { get; set; }
        // public DbSet<OrderDetails> OrderDetails { get; set; }
        
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Buyer> Buyers { get; set; }
        public DbSet<Farmer> Farmers { get; set; }
        public DbSet<Crops> Crops { get; set; }

                public DbSet<OrderDetails> OrderDetails { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Relationships and constraints

            modelBuilder.Entity<Order>()
                .HasOne(o => o.Buyer)
                .WithMany(b => b.Orders)
                .HasForeignKey(o => o.BuyerID);

            modelBuilder.Entity<Order>()
                .HasOne(o => o.Farmer)
                .WithMany(f => f.Orders)
                .HasForeignKey(o => o.FarmerID);

            modelBuilder.Entity<Cart>()
                .HasOne(c => c.Buyer)
                .WithMany(b => b.Carts)
                .HasForeignKey(c => c.BuyerID);

           modelBuilder.Entity<CartItem>()
                .HasOne(ci => ci.Crop)
                .WithMany(c => c.CartItems)
                .HasForeignKey(ci => ci.CropID);

          
        modelBuilder.Entity<Crops>()
                .HasOne(c => c.Farmer)
                .WithMany(f => f.Crops)
                .HasForeignKey(c => c.FarmerID)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<OrderDetails>()
                .HasOne(od => od.Order)
                .WithMany(o => o.OrderDetails)
                .HasForeignKey(od => od.OrderID);


            modelBuilder.Entity<Crops>().Property(c => c.Status).HasDefaultValue("PENDING");
        }

        }
}
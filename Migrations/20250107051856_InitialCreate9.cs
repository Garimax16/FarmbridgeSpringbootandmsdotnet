using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FarmBridge.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate9 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Crop_CropID",
                table: "CartItems");

            migrationBuilder.DropTable(
                name: "Crop");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Farmers",
                type: "varchar(100)",
                maxLength: 100,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "longtext")
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Crops",
                columns: table => new
                {
                    CropID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Season = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Quantity = table.Column<float>(type: "float", nullable: false),
                    Image = table.Column<byte[]>(type: "longblob", nullable: true),
                    Status = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false, defaultValue: "PENDING")
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    FarmerID = table.Column<int>(type: "int", nullable: false),
                    Price = table.Column<float>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crops", x => x.CropID);
                    table.ForeignKey(
                        name: "FK_Crops_Farmers_FarmerID",
                        column: x => x.FarmerID,
                        principalTable: "Farmers",
                        principalColumn: "FarmerID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Crops_FarmerID",
                table: "Crops",
                column: "FarmerID");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Crops_CropID",
                table: "CartItems",
                column: "CropID",
                principalTable: "Crops",
                principalColumn: "CropID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CartItems_Crops_CropID",
                table: "CartItems");

            migrationBuilder.DropTable(
                name: "Crops");

            migrationBuilder.AlterColumn<string>(
                name: "Password",
                table: "Farmers",
                type: "longtext",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "varchar(100)",
                oldMaxLength: 100)
                .Annotation("MySql:CharSet", "utf8mb4")
                .OldAnnotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Crop",
                columns: table => new
                {
                    CropID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    FarmerID = table.Column<int>(type: "int", nullable: false),
                    Image = table.Column<byte[]>(type: "longblob", nullable: true),
                    Name = table.Column<string>(type: "varchar(100)", maxLength: 100, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Price = table.Column<float>(type: "float", nullable: false),
                    Quantity = table.Column<float>(type: "float", nullable: false),
                    Season = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Status = table.Column<string>(type: "varchar(50)", maxLength: 50, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crop", x => x.CropID);
                    table.ForeignKey(
                        name: "FK_Crop_Farmers_FarmerID",
                        column: x => x.FarmerID,
                        principalTable: "Farmers",
                        principalColumn: "FarmerID",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_Crop_FarmerID",
                table: "Crop",
                column: "FarmerID");

            migrationBuilder.AddForeignKey(
                name: "FK_CartItems_Crop_CropID",
                table: "CartItems",
                column: "CropID",
                principalTable: "Crop",
                principalColumn: "CropID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

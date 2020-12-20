using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class UpdateSetup : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Setup_Users_AppUserId",
                table: "Setup");

            migrationBuilder.DropIndex(
                name: "IX_Setup_AppUserId",
                table: "Setup");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Setup");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Setup",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Setup_UserId",
                table: "Setup",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Setup_Users_UserId",
                table: "Setup",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Setup_Users_UserId",
                table: "Setup");

            migrationBuilder.DropIndex(
                name: "IX_Setup_UserId",
                table: "Setup");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Setup");

            migrationBuilder.AddColumn<int>(
                name: "AppUserId",
                table: "Setup",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Setup_AppUserId",
                table: "Setup",
                column: "AppUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Setup_Users_AppUserId",
                table: "Setup",
                column: "AppUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}

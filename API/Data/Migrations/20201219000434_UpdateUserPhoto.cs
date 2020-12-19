using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class UpdateUserPhoto : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "AppUserId",
                table: "Photo",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SetupId",
                table: "Photo",
                type: "INTEGER",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Photo_AppUserId",
                table: "Photo",
                column: "AppUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Photo_SetupId",
                table: "Photo",
                column: "SetupId");

            migrationBuilder.AddForeignKey(
                name: "FK_Photo_Setup_SetupId",
                table: "Photo",
                column: "SetupId",
                principalTable: "Setup",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Photo_Users_AppUserId",
                table: "Photo",
                column: "AppUserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Photo_Setup_SetupId",
                table: "Photo");

            migrationBuilder.DropForeignKey(
                name: "FK_Photo_Users_AppUserId",
                table: "Photo");

            migrationBuilder.DropIndex(
                name: "IX_Photo_AppUserId",
                table: "Photo");

            migrationBuilder.DropIndex(
                name: "IX_Photo_SetupId",
                table: "Photo");

            migrationBuilder.DropColumn(
                name: "AppUserId",
                table: "Photo");

            migrationBuilder.DropColumn(
                name: "SetupId",
                table: "Photo");
        }
    }
}

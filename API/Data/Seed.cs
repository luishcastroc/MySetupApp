using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class Seed
    {
        public static async Task SeedUsers(DataContext context)
        {
            // Check if there's any user, if there's any then return
            if(await context.Users.AnyAsync()) return;
            // Read the JSON file and Deserialize it
            var userData = await System.IO.File.ReadAllTextAsync("Data/UserSeedData.json");
            var users = JsonSerializer.Deserialize<List<AppUser>>(userData);
            // for each user in the File we need to create a default password
            foreach (var user in users)
            {
                using var hmac = new HMACSHA512();
                user.UserName = user.UserName.ToLower();
                user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes("Pa$$w0rd"));
                user.PasswordSalt = hmac.Key;

                context.Users.Add(user);
            }
            // Save the users in the Database
            await context.SaveChangesAsync();
        }

        public static async Task SeedCategories(DataContext context)
        {
            // Check if there's a Category, if there's any return
            if(await context.Category.AnyAsync()) return;
            // Read the JSON file and Deserialize it
            var categoryData = await System.IO.File.ReadAllTextAsync("Data/CategorySeedData.json");
            var categories = JsonSerializer.Deserialize<List<Category>>(categoryData);

            foreach (var category in categories)
            {
                category.Name = category.Name.ToLower();

                context.Category.Add(category);
            }
            // Save Categories in the Database.
            await context.SaveChangesAsync();
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
            // scope declaration to bring the services to be used
            using var scope = host.Services.CreateScope();
            var services = scope.ServiceProvider;
            try
            {
                // DataContext service to seed the data
                var context = services.GetRequiredService<DataContext>();
                await context.Database.MigrateAsync();
                await Seed.SeedCategories(context);
                await Seed.SeedUsers(context);
            }
            catch(Exception ex)
            {
                // Logger service to log any error
                var logger = services.GetRequiredService<ILogger<Program>>();
                logger.LogError(ex, "An Error Ocurred during data Seed.");
            }

            // this will run the application after seeding
            await host.RunAsync();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

namespace OdeToFood.Migrations
{
    using OdeToFood.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<OdeToFood.Models.OdeToFoodDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
            ContextKey = "OdeToFood.Models.OdeToFoodDb";
        }

        protected override void Seed(OdeToFood.Models.OdeToFoodDb context)
        {
            context.Restaurants.AddOrUpdate(r => r.Name,
                new Restaurant { Name = "Khanh", City = "HCM", Country = "VN" },
                new Restaurant { Name = "Nam", City = "DN", Country = "VN" },
                new Restaurant
                {
                    Name = "Khai",
                    City = "Hai Phong",
                    Country = "VN",
                    Reviews =
                    new List<RestaurantReview>
                    {
                        new RestaurantReview{Rating=9,Body="Great food!",ReviewerName="Scott"}
                    }
                });
            for (int i = 0; i < 1000; i++)
            {
                context.Restaurants.AddOrUpdate(r => r.Name,
                            new Restaurant { Name = i.ToString(), City = "HCM", Country = "VN" });
                                   }
        }
    }
}

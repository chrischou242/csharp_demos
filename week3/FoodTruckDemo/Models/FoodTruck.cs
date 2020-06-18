using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

namespace FoodTruckDemo.Models
{
    public class FoodTruck
    {
        [Key]
        public int FoodTruckId { get; set; }

        [Required]
        [MinLength(5, ErrorMessage = "must be at least 5 characters")]
        public string Name { get; set; }

        [Required]
        [MinLength(3, ErrorMessage = "must be at least 3 characters")]
        public string Style { get; set; }

        [Required]
        [MinLength(10, ErrorMessage = "must be at least 10 characters")]
        public string Description { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public DateTime UpdatedAt { get; set; } = DateTime.Now;

        // Foreign Keys:
        public int UserId { get; set; } // 1 User : Many Uploaded Trucks

        // Navigation Props - MUST USE .include to access:
        public User UploadedBy { get; set; } // 1 User : Many Uploaded Trucks
        public List<Review> Reviews { get; set; } // 1 Truck : Many Reviews

        // Many User : Many Truck - to get the Users who are fans
        public List<TruckFan> TruckFans { get; set; }

        // Methods:
        public double GetAvgReviewRating()
        {
            if (Reviews.Count == 0)
            {
                return 0;
            }
            return Reviews.Average(review => review.Rating);
        }
    }

}
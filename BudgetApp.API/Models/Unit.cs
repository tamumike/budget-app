using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Unit
    {
        [Key]
        public double ID { get; set; }
        public string Description { get; set; } = null!;
    }
}

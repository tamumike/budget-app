using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Area
    {
        [Key]
        public double ID { get; set; }
        public string DESCRIPTION { get; set; } = null!;
    }
}

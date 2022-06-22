using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Vendor
    {
        [Key]
        public string Code { get; set; } = null!;
        public string Name { get; set; } = null!;
    }
}

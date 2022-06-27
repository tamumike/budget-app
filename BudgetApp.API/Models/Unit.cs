using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Unit
    {
        public Unit()
        {
            BudgetLineItems = new HashSet<BudgetLineItem>();
        }

        [Key]
        public int Id { get; set; }
        public string Description { get; set; } = null!;

        public virtual ICollection<BudgetLineItem> BudgetLineItems { get; set; }
    }
}

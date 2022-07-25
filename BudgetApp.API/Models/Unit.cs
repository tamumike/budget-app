using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

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

        [JsonIgnore]
        public virtual ICollection<BudgetLineItem> BudgetLineItems { get; set; }
    }
}

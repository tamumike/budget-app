using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace BudgetApp.API.Models
{
    public partial class WBS_Dictionary
    {
        public WBS_Dictionary()
        {
            BudgetLineItems = new HashSet<BudgetLineItem>();
        }

        [Key]
        public int Id { get; set; }
        public string Category { get; set; } = null!;
        public string Account_Description { get; set; } = null!;
        public string Scope_Description { get; set; } = null!;
        public double Main { get; set; }
        public double Sub { get; set; }
        public string Project_Type { get; set; } = null!;
        public string Coding { get; set; } = null!;

        [JsonIgnore]
        public virtual ICollection<BudgetLineItem> BudgetLineItems { get; set; }
    }
}

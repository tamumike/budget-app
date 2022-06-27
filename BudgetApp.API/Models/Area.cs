﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Area
    {
        public Area()
        {
            BudgetLineItems = new HashSet<BudgetLineItem>();
        }

        [Key]
        public int Id { get; set; }
        public string Description { get; set; } = null!;

        public virtual ICollection<BudgetLineItem> BudgetLineItems { get; set; }
    }
}

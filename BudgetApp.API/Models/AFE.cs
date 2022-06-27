using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class AFE
    {
        public AFE()
        {
            BudgetLineItems = new HashSet<BudgetLineItem>();
        }

        [Key]
        public string AFE_Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public int Portfolio { get; set; }
        public int Company { get; set; }
        public int Type { get; set; }
        public int Project_Manager { get; set; }
        public string Status { get; set; } = null!;
        public DateTime? In_Service_Date { get; set; }
        public decimal? Total_Budget { get; set; }

        // public virtual Company CompanyNavigation { get; set; } = null!;
        // public virtual Portfolio PortfolioNavigation { get; set; } = null!;
        // public virtual Project_Manager Project_ManagerNavigation { get; set; } = null!;
        // public virtual AFE_Type TypeNavigation { get; set; } = null!;
        public virtual ICollection<BudgetLineItem> BudgetLineItems { get; set; }
    }
}

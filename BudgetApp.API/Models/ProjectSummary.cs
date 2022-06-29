using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace BudgetApp.API.Models
{
    [Keyless]
    public partial class ProjectSummary
    {
        public string AFE_Id { get; set; } = null!;
        public string Name { get; set; } = null!;
        public int Portfolio { get; set; }
        public decimal? Total_Budget { get; set; }
        public decimal EAC { get; set; }
        public decimal? Actuals { get; set; }
    }
}

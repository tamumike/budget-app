using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApp.API.DTOs
{
    public class ProjectSummary_DTO
    {
        public decimal? Total_Budget { get; set; }
        public decimal EAC { get; set; }
        public decimal? Actuals { get; set; }
    }
}
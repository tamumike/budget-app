using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BudgetApp.API.Models
{
    [Keyless]
    public class ProjectSummaries_KPI
    {
        public decimal Budget { get; set; }
        public decimal Actuals { get; set; }
        public decimal EAC { get; set; }
    }
}
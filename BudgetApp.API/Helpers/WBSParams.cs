using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApp.API.Helpers
{
    public class WBSParams
    {
        public int Id { get; set; }
        public string Category { get; set; } = null!;
        public string Account_Description { get; set; } = null!;
        public string Scope_Description { get; set; } = null!;
    }
}
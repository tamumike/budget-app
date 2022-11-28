using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApp.API.Helpers
{
    public class UserInfo
    {
        public string Username { get; set; } = null!;
        public string DisplayName { get; set; } = null!;
        public string Email { get; set; } = null!;
        // public int Role { get; set; }

        public UserInfo()
        {
            // Role = 1;
        } 
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.Helpers;

namespace BudgetApp.API.Data
{
    public interface IUserRepository
    {
        string GetUsername();
        UserInfo GetUserInfo(string username);
    }
}
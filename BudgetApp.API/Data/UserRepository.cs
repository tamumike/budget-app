using System;
using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.Helpers;
using Microsoft.AspNetCore.Authentication;

namespace BudgetApp.API.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly IHttpContextAccessor _http;
        private readonly IWebHostEnvironment _env;
    public UserRepository(IHttpContextAccessor http, IWebHostEnvironment env)
    {
            _http = http;
            _env = env;
        
    }
        public string GetUsername()
        {
            string username = null!;
            if (_env.IsDevelopment())
            {
                username = Environment.UserName;
            }
            else
            {
                username = _http.HttpContext.User.Identity.Name;
                username = username.Replace("LUCIDENERGY\\", "");
            }

            return username;
        }
        public UserInfo GetUserInfo(string username)
        {
            UserInfo userInfo = new UserInfo();
            PrincipalContext principalContext = new PrincipalContext(ContextType.Domain);
            UserPrincipal userPrincipal = UserPrincipal.FindByIdentity(principalContext, username);

            if (!string.IsNullOrEmpty(userPrincipal.SamAccountName))
            {
                userInfo.Username = userPrincipal.SamAccountName;
            }
            if (!string.IsNullOrEmpty(userPrincipal.DisplayName))
            {
                userInfo.DisplayName = userPrincipal.DisplayName;
            }
            if (!string.IsNullOrEmpty(userPrincipal.EmailAddress))
            {
                userInfo.Email = userPrincipal.EmailAddress;
            }
                // userInfo.Role = this.CheckUserRole(username);

            return userInfo;
        }        
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.Models;

namespace BudgetApp.API.Data
{
    public interface IBudgetRepository
    {
        Task<IEnumerable<BudgetLineItem>> GetBudgetLineItems();
        Task<BudgetLineItem?> GetSingleBudgetLineItem(int id);
        Task<IEnumerable<BudgetLineItem>> GetBudgetLineItemsByAFE(string afe);
        Task<IEnumerable<AFE>> GetAFEs();
        Task<AFE?> GetSingleAFE(string afe_no);
        Task<IEnumerable<Area>> GetAreas();
        Task<Area?> GetSingleArea(int id);
        Task<IEnumerable<Unit>> GetUnits();
        Task<Unit?> GetSingleUnit(int id);
        Task<IEnumerable<Vendor>> GetVendors();
        Task<Vendor?> GetSingleVendor(string code);
    }
}
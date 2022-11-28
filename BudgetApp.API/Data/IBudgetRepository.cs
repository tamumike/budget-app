using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.Helpers;
using BudgetApp.API.Models;

namespace BudgetApp.API.Data
{
    public interface IBudgetRepository
    {
        Task<IEnumerable<BudgetLineItem>> GetBudgetLineItems();
        Task<BudgetLineItem?> GetSingleBudgetLineItem(int id);
        Task<BudgetLineItem?>  GetActiveBudgetLineItemByParentID(int parent_id);
        Task<IEnumerable<BudgetLineItem>> GetBudgetLineItemsByAFE(string afe);
        Task<BudgetLineItem> CreateBudgetLineItem(BudgetLineItem budgetLineItem);
        Task<BudgetLineItem> UpdateBudgetLineItem(BudgetLineItem budgetLineItem, BudgetLineItem parentBudgetLineItem);
        bool ToggleBudgetLineItemIsActive(bool is_Active);
        int IncreaseRevisionNumber(int revision_No);
        Task<IEnumerable<AFE>> GetAFEs();
        Task<AFE?> GetSingleAFE(string afe_no);
        Task<IEnumerable<Area>> GetAreas();
        Task<Area?> GetSingleArea(int id);
        Task<IEnumerable<Unit>> GetUnits();
        Task<Unit?> GetSingleUnit(int id);
        Task<IEnumerable<Vendor>> GetVendors();
        Task<Vendor?> GetSingleVendor(string code);
        Task<IEnumerable<Portfolio>> GetPortfolios();
        Task<Portfolio?> GetSinglePortfolio(int code);
        Task<IEnumerable<ProjectSummary>> GetProjectSummaries();
        Task<ProjectSummary?> GetProjectSummary(string afe_Id);
        Task<IEnumerable<ProjectSummaries_KPI>> GetProjectSummariesKPIs();
        Task<IEnumerable<WBS_Dictionary>> GetWBS_Dictionary(WBSParams wbsParams);
        Task<WBS_Dictionary?> GetWBS_Dictionary(int Id);
        Task<string> ImportInvoiceData(IFormFile file);
        // Task<IEnumerable<WBS_Dictionary>> GetWBS_Dictionary(string category);
        // Task<IEnumerable<WBS_Dictionary>> GetWBS_Dictionary(string category, string account);
        // Task<IEnumerable<WBS_Dictionary>> GetWBS_Dictionary(string category, string account, string scope);
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.DTOs;
using BudgetApp.API.Helpers;
using BudgetApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BudgetApp.API.Data
{
    public class BudgetRepository : IBudgetRepository
    {
        private readonly DataContext _context;

        public BudgetRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<BudgetLineItem>> GetBudgetLineItems()
        {
            var budgetLineItems = await _context.BudgetLineItems.ToListAsync();
            return budgetLineItems;
        }

        public async Task<BudgetLineItem?> GetSingleBudgetLineItem(int id)
        {
            var budgetLineItem = await _context.BudgetLineItems.Where(b => b.Id == id && b.Is_Active == true)   //POSSIBLY NEED TO REMOVE THE IS_ACTIVE CONDITION
            .Include(b => b.Area)
            .Include(b => b.Unit)
            .Include(b => b.WBS)
            .FirstOrDefaultAsync();
            
            return budgetLineItem;
        }

        public async Task<BudgetLineItem?> GetActiveBudgetLineItemByParentID(int parent_id)
        {
            var parentBudgetLineItem = _context.BudgetLineItems.Where(b => b.Parent_Id == parent_id)
                .OrderByDescending(b => b.Revision_No)
                .Take(1)
                .AsQueryable();

            return await parentBudgetLineItem.FirstOrDefaultAsync();
        }

        public Boolean CompareEntities(BudgetLineItem obj1, UpdateBudgetLineItem_DTO obj2)
        {

            return false;
        }

        public async Task<IEnumerable<BudgetLineItem>> GetBudgetLineItemsByAFE(string afe)
        {
            var budgetLineItems = _context.BudgetLineItems.Where(b => b.AFE_Id == afe)
                .Include(b => b.Area)
                .Include(b => b.Unit)
                .Include(b => b.WBS)
                .AsQueryable();

            return await budgetLineItems.ToListAsync();
        }

        public async Task<BudgetLineItem> CreateBudgetLineItem(BudgetLineItem budgetLineItem)
        {
            await _context.BudgetLineItems.AddAsync(budgetLineItem);
            await _context.SaveChangesAsync();
            budgetLineItem.Parent_Id = budgetLineItem.Id; // SET PARENT ID TO ID 
            await _context.SaveChangesAsync();

            return budgetLineItem;
        }
        public async Task<BudgetLineItem> UpdateBudgetLineItem(BudgetLineItem budgetLineItem, BudgetLineItem parentBudgetLineItem)
        {
            parentBudgetLineItem.Is_Active = this.ToggleBudgetLineItemIsActive(parentBudgetLineItem.Is_Active);
            budgetLineItem.Revision_No = this.IncreaseRevisionNumber(parentBudgetLineItem.Revision_No);
            parentBudgetLineItem.Date_Modified = DateTime.Now;
            parentBudgetLineItem.Modified_By = "Michael Linden";            // CHANGE THIS

            await _context.BudgetLineItems.AddAsync(budgetLineItem);
            await _context.SaveChangesAsync();
            return budgetLineItem;
        }

        public bool ToggleBudgetLineItemIsActive(bool value)
        {
            return !value;
        }

        public int IncreaseRevisionNumber(int value)
        {
            return value + 1;
        }

        public async Task<IEnumerable<AFE>> GetAFEs()
        {
            var AFEs = await _context.AFEs.ToListAsync();
            return AFEs;
        }

        public async Task<AFE?> GetSingleAFE(string afe_no)
        {
            var AFE = await _context.AFEs.Where(a => a.AFE_Id == afe_no).FirstOrDefaultAsync();
            return AFE;
        }        

        public async Task<IEnumerable<Area>> GetAreas()
        {
            var areas = await _context.Areas.ToListAsync();
            return areas;
        }

        public async Task<Area?> GetSingleArea(int id)
        {
            var area = await _context.Areas.Where(a => a.Id == id).FirstOrDefaultAsync();
            return area;
        }        

        public async Task<IEnumerable<Unit>> GetUnits()
        {
            var units = await _context.Units.ToListAsync();
            return units;
        }

        public async Task<Unit?> GetSingleUnit(int id)
        {
            var unit = await _context.Units.Where(u => u.Id == id).FirstOrDefaultAsync();
            return unit;
        }        

        public async Task<IEnumerable<Vendor>> GetVendors()
        {
            var vendors = await _context.Vendors.ToListAsync();
            return vendors;
        }

        public async Task<Vendor?> GetSingleVendor(string code)
        {
            var vendor = await _context.Vendors.Where(v => v.Code == code).FirstOrDefaultAsync();
            return vendor;
        }

        public async Task<IEnumerable<ProjectSummary>> GetProjectSummaries()
        {
            var projectSummaries = await _context.ProjectSummaries.ToListAsync();
            return projectSummaries;
        }
        public async Task<ProjectSummary?> GetProjectSummary(string afe_Id)
        {
            var projectSummary = await _context.ProjectSummaries.Where(p => p.AFE_Id == afe_Id).FirstOrDefaultAsync();
            return projectSummary;
        }

        public async Task<IEnumerable<ProjectSummaries_KPI>> GetProjectSummariesKPIs()
        {
            var kpis = await _context.ProjectSummaries_KPIs.ToListAsync();
            return kpis;
        }

        public async Task<IEnumerable<Portfolio>> GetPortfolios()
        {
            var portfolios = await _context.Portfolios.ToListAsync();
            return portfolios;
        }

        public async Task<Portfolio?> GetSinglePortfolio(int code)
        {
            var portfolio = await _context.Portfolios
                .Where(p => p.Property_Code == code).FirstOrDefaultAsync();
            
            return portfolio;
        }

        public async Task<IEnumerable<WBS_Dictionary>> GetWBS_Dictionary(WBSParams wbsParams)
        {
            var wbs_dict = _context.WBS_Dictionaries
            .AsQueryable();

            if (!string.IsNullOrEmpty(wbsParams.Category))
            {
                wbs_dict = wbs_dict.Where(w => w.Category == wbsParams.Category);
            }
            
            if (!string.IsNullOrEmpty(wbsParams.Account_Description))
            {
                wbs_dict = wbs_dict.Where(w => w.Account_Description == wbsParams.Account_Description);
            }
            
            if (!string.IsNullOrEmpty(wbsParams.Scope_Description))
            {
                wbs_dict = wbs_dict.Where(w => w.Scope_Description == wbsParams.Scope_Description);
            }            

            return await wbs_dict.ToListAsync();
        }

        public async Task<WBS_Dictionary?> GetWBS_Dictionary(int Id)
        {
            var wbs = await _context.WBS_Dictionaries.Where(w => w.Id == Id).FirstOrDefaultAsync();
            return wbs;
        }     
    }
}
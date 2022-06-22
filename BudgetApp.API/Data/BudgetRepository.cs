using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
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
            // var budgetLineItem = await _context.BudgetLineItems.Where(b => b.ID == id).FirstOrDefaultAsync();
            var budgetLineItem = await _context.BudgetLineItems.Where(b => b.ID == id).FirstOrDefaultAsync();
            return budgetLineItem;
        }        

        public async Task<IEnumerable<AFE>> GetAFEs()
        {
            var AFEs = await _context.AFEs.ToListAsync();
            return AFEs;
        }

        public async Task<AFE?> GetSingleAFE(string afe_no)
        {
            var AFE = await _context.AFEs.Where(a => a.AFE_No == afe_no).FirstOrDefaultAsync();
            return AFE;
        }        

        public async Task<IEnumerable<Area>> GetAreas()
        {
            var areas = await _context.Areas.ToListAsync();
            return areas;
        }

        public async Task<Area?> GetSingleArea(int id)
        {
            var area = await _context.Areas.Where(a => a.ID == id).FirstOrDefaultAsync();
            return area;
        }        

        public async Task<IEnumerable<Unit>> GetUnits()
        {
            var units = await _context.Units.ToListAsync();
            return units;
        }

        public async Task<Unit?> GetSingleUnit(int id)
        {
            var unit = await _context.Units.Where(u => u.ID == id).FirstOrDefaultAsync();
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
    }
}








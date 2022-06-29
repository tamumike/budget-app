using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace BudgetApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}

        public DbSet<BudgetLineItem> BudgetLineItems => Set<BudgetLineItem>();
        public DbSet<AFE> AFEs => Set<AFE>();
        public DbSet<Area> Areas => Set<Area>();
        public DbSet<Unit> Units => Set<Unit>();
        public DbSet<Vendor> Vendors => Set<Vendor>();
        public DbSet<ProjectSummary> ProjectSummaries => Set<ProjectSummary>();
        public DbSet<ProjectSummaries_KPI> ProjectSummaries_KPIs => Set<ProjectSummaries_KPI>();
    }
}
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using BudgetApp.API.Models;

namespace BudgetApp.API.Data
{
    public partial class Budget_v2Context : DbContext
    {
        public Budget_v2Context()
        {
        }

        public Budget_v2Context(DbContextOptions<Budget_v2Context> options)
            : base(options)
        {
        }

        public virtual DbSet<AFE> AFEs { get; set; } = null!;
        public virtual DbSet<AFE_Type> AFE_Types { get; set; } = null!;
        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<BudgetLineItem> BudgetLineItems { get; set; } = null!;
        public virtual DbSet<Company> Companies { get; set; } = null!;
        public virtual DbSet<Portfolio> Portfolios { get; set; } = null!;
        public virtual DbSet<Project_Manager> Project_Managers { get; set; } = null!;
        public virtual DbSet<Unit> Units { get; set; } = null!;
        public virtual DbSet<Vendor> Vendors { get; set; } = null!;
        public virtual DbSet<WBS_Dictionary> WBS_Dictionaries { get; set; } = null!;
        public virtual DbSet<ProjectSummary> ProjectSummaries { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AFE>(entity =>
            {
                entity.HasKey(e => e.AFE_Id);

                entity.Property(e => e.AFE_Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.In_Service_Date).HasColumnType("date");

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Total_Budget).HasColumnType("decimal(18, 2)");

                // entity.HasOne(d => d.CompanyNavigation)
                //     .WithMany(p => p.AFEs)
                //     .HasForeignKey(d => d.Company)
                //     .OnDelete(DeleteBehavior.ClientSetNull)
                //     .HasConstraintName("FK_AFEs_Companies");

                // entity.HasOne(d => d.PortfolioNavigation)
                //     .WithMany(p => p.Aves)
                //     .HasForeignKey(d => d.Portfolio)
                //     .OnDelete(DeleteBehavior.ClientSetNull)
                //     .HasConstraintName("FK_AFEs_Portfolios");

                // entity.HasOne(d => d.Project_ManagerNavigation)
                //     .WithMany(p => p.Aves)
                //     .HasForeignKey(d => d.Project_Manager)
                //     .OnDelete(DeleteBehavior.ClientSetNull)
                //     .HasConstraintName("FK_AFEs_Project_Managers");

                // entity.HasOne(d => d.TypeNavigation)
                //     .WithMany(p => p.AFEs)
                //     .HasForeignKey(d => d.Type)
                //     .OnDelete(DeleteBehavior.ClientSetNull)
                //     .HasConstraintName("FK_AFEs_AFE_Types");
            });

            modelBuilder.Entity<AFE_Type>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<Area>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<BudgetLineItem>(entity =>
            {
                entity.Property(e => e.AFE_Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Created_By).IsUnicode(false);

                entity.Property(e => e.Date_Created).HasColumnType("datetime");

                entity.Property(e => e.Date_Modified).HasColumnType("datetime");

                entity.Property(e => e.Modified_By).IsUnicode(false);

                entity.Property(e => e.Total_Cost).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Unit_Cost).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Vendor).HasMaxLength(255);

                // entity.HasOne(d => d.AFE)
                //     .WithMany(p => p.BudgetLineItems)
                //     .HasForeignKey(d => d.AFE_Id)
                //     .OnDelete(DeleteBehavior.ClientSetNull)
                //     .HasConstraintName("FK_BudgetLineItems_AFEs");

                // entity.HasOne(d => d.Area)
                //     .WithMany(p => p.BudgetLineItems)
                //     .HasForeignKey(d => d.Area_Id)
                //     .HasConstraintName("FK_BudgetLineItems_Areas");

                // entity.HasOne(d => d.Unit)
                //     .WithMany(p => p.BudgetLineItems)
                //     .HasForeignKey(d => d.Unit_Id)
                //     .HasConstraintName("FK_BudgetLineItems_Units");

                // entity.HasOne(d => d.WBS)
                //     .WithMany(p => p.BudgetLineItems)
                //     .HasForeignKey(d => d.WBS_Id)
                //     .OnDelete(DeleteBehavior.ClientSetNull)
                //     .HasConstraintName("FK_BudgetLineItems_WBS_Dictionary");
            });

            modelBuilder.Entity<Company>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<Portfolio>(entity =>
            {
                entity.HasKey(e => e.Property_Code);

                entity.Property(e => e.Property_Code).ValueGeneratedNever();

                entity.Property(e => e.Property_Description).IsUnicode(false);
            });

            modelBuilder.Entity<Project_Manager>(entity =>
            {
                entity.Property(e => e.Name).IsUnicode(false);
            });

            modelBuilder.Entity<Unit>(entity =>
            {
                entity.Property(e => e.Description).IsUnicode(false);
            });

            modelBuilder.Entity<Vendor>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.Property(e => e.Code).HasMaxLength(255);

                entity.Property(e => e.Name).IsUnicode(false);
            });

            modelBuilder.Entity<WBS_Dictionary>(entity =>
            {
                entity.ToTable("WBS_Dictionary");

                entity.Property(e => e.Account_Description).IsUnicode(false);

                entity.Property(e => e.Category).IsUnicode(false);

                entity.Property(e => e.Coding)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Scope_Description).IsUnicode(false);
            });

            modelBuilder.Entity<ProjectSummary>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("ProjectSummaries");

                entity.Property(e => e.AFE_Id)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Actuals).HasColumnType("decimal(38, 2)");

                entity.Property(e => e.EAC).HasColumnType("numeric(2, 2)");

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.Total_Budget).HasColumnType("decimal(18, 2)");
            });

            modelBuilder.Entity<ProjectSummaries_KPI>(entity => {
                
                entity.HasNoKey();

                entity.ToView("ProjectSummaries_KPIs");

                entity.Property(e => e.Budget).HasColumnType("decimal(38, 2)");

                entity.Property(e => e.Actuals).HasColumnType("decimal(38, 2)");

                entity.Property(e => e.EAC).HasColumnType("numeric(2, 2)");

            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

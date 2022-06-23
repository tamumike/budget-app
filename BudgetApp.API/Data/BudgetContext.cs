using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using BudgetApp.API.Models;

namespace BudgetApp.API.Data
{
    public partial class BudgetContext : DbContext
    {
        public BudgetContext()
        {
        }

        public BudgetContext(DbContextOptions<BudgetContext> options)
            : base(options)
        {
        }

        public virtual DbSet<AFE> AFEs { get; set; } = null!;
        public virtual DbSet<Area> Areas { get; set; } = null!;
        public virtual DbSet<BudgetLineItem> BudgetLineItems { get; set; } = null!;
        public virtual DbSet<Unit> Units { get; set; } = null!;
        public virtual DbSet<Vendor> Vendors { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AFE>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.AFE_No)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Area)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.In_Service_Date).HasColumnType("date");

                entity.Property(e => e.Name).IsUnicode(false);

                entity.Property(e => e.Project_Manager).IsUnicode(false);

                entity.Property(e => e.Property_Desc).IsUnicode(false);

                entity.Property(e => e.Status)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Type)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Total_Budget).HasColumnType("decimal(18, 2)");
                entity.Property(e => e.Contingency).HasColumnType("decimal(18, 2)");
            });

            modelBuilder.Entity<Area>(entity =>
            {
                entity.Property(e => e.DESCRIPTION).HasMaxLength(255);
            });

            modelBuilder.Entity<BudgetLineItem>(entity =>
            {
                entity.Property(e => e.AFE_Name).IsUnicode(false);

                entity.Property(e => e.AFE_No)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Account_Description).IsUnicode(false);

                entity.Property(e => e.Area)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Category).IsUnicode(false);

                entity.Property(e => e.Coding)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Created_By)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Date_Created).HasColumnType("datetime");

                entity.Property(e => e.Date_Modified).HasColumnType("datetime");

                entity.Property(e => e.Modified_By)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Scope_Description).IsUnicode(false);

                entity.Property(e => e.Total_Cost).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Unit)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Unit_Cost).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Vendor_Name).IsUnicode(false);
            });

            modelBuilder.Entity<Unit>(entity =>
            {
                entity.Property(e => e.Description).HasMaxLength(255);
            });

            modelBuilder.Entity<Vendor>(entity =>
            {
                entity.HasKey(e => e.Code);

                entity.Property(e => e.Code).HasMaxLength(255);

                entity.Property(e => e.Name).HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}

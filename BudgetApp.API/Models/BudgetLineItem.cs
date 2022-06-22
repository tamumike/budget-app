using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class BudgetLineItem
    {
        [Key]
        public int ID { get; set; }
        public string AFE_No { get; set; } = null!;
        public string AFE_Name { get; set; } = null!;
        public int Company { get; set; }
        public int Property_Code { get; set; }
        public int Gate { get; set; }
        public string Coding { get; set; } = null!;
        public string Category { get; set; } = null!;
        public string Account_Description { get; set; } = null!;
        public string Scope_Description { get; set; } = null!;
        public string? Area { get; set; }
        public string? Unit { get; set; }
        public string? Vendor_Name { get; set; }
        public double? Quantity { get; set; }
        public decimal Unit_Cost { get; set; }
        public double? Tax_Rate { get; set; }
        public decimal Total_Cost { get; set; }
        public string? Comment { get; set; }
        public DateTime Date_Created { get; set; }
        public string Created_By { get; set; } = null!;
        public DateTime? Date_Modified { get; set; }
        public string? Modified_By { get; set; }
        public int Revision_No { get; set; }
        public bool Is_Active { get; set; }
    }
}

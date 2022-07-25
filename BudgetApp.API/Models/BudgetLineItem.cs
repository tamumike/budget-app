using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetApp.API.Models
{
    public partial class BudgetLineItem
    {
        public int Id { get; set; }
        public string AFE_Id { get; set; } = null!;
        public int Gate { get; set; }
        public int WBS_Id { get; set; }
        public int? Area_Id { get; set; }
        public int? Unit_Id { get; set; }
        public string? Vendor { get; set; }
        public double? Quantity { get; set; }
        public decimal Unit_Cost { get; set; }
        public double? Tax_Rate { get; set; }
        public decimal Total_Cost { get; set; }
        public string? Comment { get; set; }
        public DateTime Date_Created { get; set; }
        public string Created_By { get; set; } = null!;
        public DateTime? Date_Modified { get; set; }
        public string? Modified_By { get; set; }
        public int Parent_Id { get; set; }
        public int Revision_No { get; set; }
        public bool Is_Active { get; set; }

        [ForeignKey("AFE_Id")]
        public virtual AFE AFE { get; set; } = null!;
        [ForeignKey("Area_Id")]
        public virtual Area? Area { get; set; } = null!;
        [ForeignKey("Unit_Id")]
        public virtual Unit? Unit { get; set; } = null!;
        [ForeignKey("WBS_Id")]
        public virtual WBS_Dictionary WBS { get; set; } = null!;
    }
}

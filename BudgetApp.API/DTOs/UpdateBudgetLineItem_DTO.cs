using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApp.API.DTOs
{
    public class UpdateBudgetLineItem_DTO
    {
        public string AFE_Id { get; set; } = null!;
        public int Gate { get; set; }
        public int? WBS_Id { get; set; }
        public int? Area_Id { get; set; }
        public int? Unit_Id { get; set; }
        public double? Quantity { get; set; }
        public decimal Unit_Cost { get; set; }
        public double? Tax_Rate { get; set; }
        public decimal Total_Cost { get; set; }
        public string? Comment { get; set; }
        public int Parent_Id { get; set; }
        public DateTime Date_Created { get; set; }
        public string Created_By { get; set; }
        public bool Is_Active { get; set; }

        public UpdateBudgetLineItem_DTO() 
        {
            Date_Created = DateTime.Now;
            Created_By = "Michael Linden";
            Is_Active = true;
        }
    }
}
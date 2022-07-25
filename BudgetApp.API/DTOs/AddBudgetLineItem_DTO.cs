using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BudgetApp.API.DTOs
{
    public class AddBudgetLineItem_DTO
    {
        public string AFE_Id { get; set; } = null!;
        public int Gate { get; set; }
        public int WBS_Id { get; set; }
        public int? Area_Id { get; set; }
        public int? Unit_Id { get; set; }
        public double? Quantity { get; set; }
        public decimal Unit_Cost { get; set; }
        public double? Tax_Rate { get; set; }
        public decimal Total_Cost { get; set; }
        public string? Comment { get; set; }
        public DateTime? Date_Created { get; set; }
        public string? Created_By { get; set; } = null!;
        public int? Parent_Id { get; set; }
        public int? Revision_No { get; set; }
        public bool? Is_Active { get; set; }

        public AddBudgetLineItem_DTO() 
        {  
            // AFE_Id = "212131";
            Date_Created = DateTime.Now;
            Created_By = "Michael Linden";
            Revision_No = 0;
            Is_Active = true;
        }
    }
}
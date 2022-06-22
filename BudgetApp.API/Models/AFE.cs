using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class AFE
    {
        [Key]
        public string AFE_No { get; set; } = null!;
        public string Name { get; set; } = null!;
        public string Area { get; set; } = null!;
        public int Company { get; set; }
        public int Property_Code { get; set; }
        public string Property_Desc { get; set; } = null!;
        public string Type { get; set; } = null!;
        public string Project_Manager { get; set; } = null!;
        public string Status { get; set; } = null!;
        public DateTime? In_Service_Date { get; set; }
    }
}

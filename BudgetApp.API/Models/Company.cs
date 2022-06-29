using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Company
    {
        public Company()
        {
            AFEs = new HashSet<AFE>();
        }

        [Key]
        public int Id { get; set; }
        public string Description { get; set; } = null!;

        public virtual ICollection<AFE> AFEs { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Portfolio
    {
        public Portfolio()
        {
            Aves = new HashSet<AFE>();
        }

        [Key]
        public int Property_Code { get; set; }
        public string Property_Description { get; set; } = null!;

        public virtual ICollection<AFE> Aves { get; set; }
    }
}

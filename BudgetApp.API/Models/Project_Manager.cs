using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BudgetApp.API.Models
{
    public partial class Project_Manager
    {
        public Project_Manager()
        {
            Aves = new HashSet<AFE>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = null!;

        public virtual ICollection<AFE> Aves { get; set; }
    }
}

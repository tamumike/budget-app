using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BudgetApp.API.DTOs;
using BudgetApp.API.Models;

namespace BudgetApp.API.Helpers
{
    public class Automapper : Profile
    {
        public Automapper()
        {
            CreateMap<AddBudgetLineItem_DTO, BudgetLineItem>();
            CreateMap<UpdateBudgetLineItem_DTO, BudgetLineItem>();
            CreateMap<ProjectSummary, ProjectSummary_DTO>();
        }
        
    }
}
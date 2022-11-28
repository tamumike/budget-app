using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BudgetApp.API.Data;
using BudgetApp.API.DTOs;
using BudgetApp.API.Helpers;
using BudgetApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BudgetApp.API.Controllers
{
    [Route("[controller]")]
    public class BudgetController : Controller
    {
        private readonly ILogger<BudgetController> _logger;
        private readonly IBudgetRepository _repo;
        private readonly IMapper _mapper;

        public BudgetController(ILogger<BudgetController> logger, IBudgetRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> Get() 
        {
            var budgets = await _repo.GetBudgetLineItems();
            return Ok(budgets);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSingle(int id)
        {
            var budget = await _repo.GetSingleBudgetLineItem(id);
            return Ok(budget);
        }

        [HttpGet("Project/{afe}")]
        public async Task<IActionResult> GetByAFE(string afe)
        {
            var budgets = await _repo.GetBudgetLineItemsByAFE(afe);
            return Ok(budgets);
        }

        [HttpPost]
        public async Task<IActionResult> CreateBudgetLineItem(AddBudgetLineItem_DTO addBudgetLineItem_DTO)
        {
            var budgetLineItemToCreate = _mapper.Map<BudgetLineItem>(addBudgetLineItem_DTO);
            var createdBudgetLineItem = await _repo.CreateBudgetLineItem(budgetLineItemToCreate);

            return Ok(createdBudgetLineItem);
        }

        [HttpPost("update/{id}")]
        public async Task<IActionResult> UpdateBudgetLineItem(UpdateBudgetLineItem_DTO updateBudgetLineItem_DTO, int id)
        {
            var parentBudgetLineItem = await _repo.GetSingleBudgetLineItem(id);
            
            if (parentBudgetLineItem == null) {
                return BadRequest();
            }

            var budgetLineItemToUpdate = _mapper.Map<BudgetLineItem>(updateBudgetLineItem_DTO);
            var updatedBudgetLineItem = await _repo.UpdateBudgetLineItem(budgetLineItemToUpdate, parentBudgetLineItem);
            return Ok(updatedBudgetLineItem);
        }

        [HttpGet("AFEs")]
        public async Task<IActionResult> GetAFEs()
        {
            var AFEs = await _repo.GetAFEs();
            return Ok(AFEs);
        }

        [HttpGet("AFEs/{afe_no}")]
        public async Task<IActionResult> GetSingleAFE(string afe_no)
        {
            var AFE = await _repo.GetSingleAFE(afe_no);
            return Ok(AFE);
        }        

        [HttpGet("Areas")]
        public async Task<IActionResult> GetAreas()
        {
            var areas = await _repo.GetAreas();
            return Ok(areas);
        }

        [HttpGet("Areas/{id}")]
        public async Task<IActionResult> GetSingleArea(int id)
        {
            var area = await _repo.GetSingleArea(id);
            return Ok(area);
        }        

        [HttpGet("Units")]
        public async Task<IActionResult> GetUnits()
        {
            var units = await _repo.GetUnits();
            return Ok(units);
        }

        [HttpGet("Units/{id}")]
        public async Task<IActionResult> GetSingleUnit(int id)
        {
            var unit = await _repo.GetSingleUnit(id);
            return Ok(unit);
        }        

        [HttpGet("Vendors")]
        public async Task<IActionResult> GetVendors()
        {
            var vendors = await _repo.GetVendors();
            return Ok(vendors);
        }

        [HttpGet("Vendors/{code}")]
        public async Task<IActionResult> GetSingleVendor(string code)
        {
            var vendor = await _repo.GetSingleVendor(code);
            return Ok(vendor);
        }
        [HttpGet("Portfolios")]
        public async Task<IActionResult> GetPortfolios()
        {
            var portfolios = await _repo.GetPortfolios();
            return Ok(portfolios);
        }

        [HttpGet("Portfolios/{code}")]
        public async Task<IActionResult> GetSinglePortfolio(int code)
        {
            var portfolio = await _repo.GetSinglePortfolio(code);
            return Ok(portfolio);
        }

        [HttpGet("AllProjects")]
        public async Task<IActionResult> GetProjectSummaries()
        {
            var summaries = await _repo.GetProjectSummaries();
            return Ok(summaries);
        }
        [HttpGet("AllProjects/KPIs")]
        public async Task<IActionResult> GetProjectSummariesKPIs()
        {
            var kpis = await _repo.GetProjectSummariesKPIs();
            return Ok(kpis);
        }
        [HttpGet("Overview/KPIs/{afe_Id}")]
        public async Task<IActionResult> GetProjectSummary(string afe_Id)
        {
            var summary = await _repo.GetProjectSummary(afe_Id);
            var summaryToReturn = _mapper.Map<ProjectSummary_DTO>(summary);
            return Ok(summaryToReturn);
        }

        [HttpGet("WBS")]
        public async Task<IActionResult> GetWBS([FromQuery]WBSParams wbsParams)
        {
            var wbs_dict = await _repo.GetWBS_Dictionary(wbsParams);
            return Ok(wbs_dict);
        }

        [HttpGet("WBS/{id}")]
        public async Task<IActionResult> GetWBS(int Id)
        {
            var wbs = await _repo.GetWBS_Dictionary(Id);
            return Ok(wbs);
        }

        [HttpPost("import")]
        public async Task<IActionResult> ImportExcelData([FromForm]IFormFile file)
        {
            var fileObj = file.FileName;
            var mainPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "Uploads");

            if(!Directory.Exists(mainPath))
            {
                Directory.CreateDirectory(mainPath);
            }
            var filePath = Path.Combine(mainPath, file.FileName);
            using (System.IO.Stream stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            return Ok(mainPath);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}
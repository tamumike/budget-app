using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using BudgetApp.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BudgetApp.API.Controllers
{
    [Route("[controller]")]
    public class BudgetController : Controller
    {
        private readonly ILogger<BudgetController> _logger;
        private readonly IBudgetRepository _repo;

        public BudgetController(ILogger<BudgetController> logger, IBudgetRepository repo)
        {
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

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View("Error!");
        }
    }
}
using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MortgageCalculatorController : ControllerBase
    {
        //Calculator
        //check it out latter 
        [HttpGet("{showAmortization}/{hoaFees}/{percentTaxRate}/{yearTerm}/{percentRate}/{downPayment}/{monthlyHomeInsurance}/{price}")]
        public MortgageCalculatorModel GetByCalculations(bool showAmortization, float hoaFees, float percentTaxRate, int yearTerm, float percentRate, float downPayment, float monthlyHomeInsurance, float price)
        {
            return MortgageCalculatorDAL.CalculateMortgage( showAmortization,  hoaFees, percentTaxRate, yearTerm, percentRate, downPayment,  monthlyHomeInsurance,  price);
        }
    }
}

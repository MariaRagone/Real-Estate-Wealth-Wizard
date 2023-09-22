using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AverageRateController : ControllerBase
    {

        [HttpGet("{postal_code}")]
        public AverageRateModel GetAverageRatesByPostal(string postal_code)
        {
            return AverageRateDAL.GetAverageRatesByPostal(postal_code);
        }
    }
}

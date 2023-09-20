using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentController : ControllerBase
    {
        //PropertiesByPostalModel _dbContext = new PropertiesByPostalModel();

        //api/Rent/12133
        [HttpGet("{postal_code}")]
        public RentModel GetRentByPostal(string postal_code, int beds_Min)
        {
            return RentDAL.GetForRentByPostal(postal_code, beds_Min);
        }
    }
}

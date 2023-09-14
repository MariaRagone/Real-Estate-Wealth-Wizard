using FinalProject.Models;
using FinalProject1.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class PropertyDetailsController : ControllerBase
    {
        //PropertiesByPostalModel _dbContext = new PropertiesByPostalModel();

    ///api/PropertyDetails/34fdaf3  <--has to match the controller name
            [HttpGet("{propertyId}")]
        public PropertyDetailsModel GetAllPropertyDetails(string propertyId)
        {
            return PropertyDetailsDAL.GetPropertyDetails(propertyId);
        }

    }
}


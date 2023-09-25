using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        //Our code
        RealEstateDbContext _dbContext = new RealEstateDbContext(); // access the database
        [HttpGet("{id}")] // endpoint
        public User GetById(int id)
        {
            return _dbContext.Users.Find(id);
        }

        //public User GetById(int id)
        //{
        //    return _dbContext.Users.FirstOrDefault(u => u.Id == id);
        //}

        [HttpPost("")]
        public User AddUser([FromBody] User u)
        {
            _dbContext.Users.Add(u);
            _dbContext.SaveChanges();
            return u;
        }

    }
}

using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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

        [HttpGet("googleId/{googleId}")]
        public User GetByGoogleId(string googleId)
        {
            return _dbContext.Users.FirstOrDefault(u => u.GoogleId == googleId);
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

        [HttpPost("initial")]
        public User AddGoogleUser([FromBody] User u)
        {
            if (_dbContext.Users.Any(g => g.GoogleId == u.GoogleId) == false)
            {
                _dbContext.Users.Add(u);
                _dbContext.SaveChanges();
                return u;
            }
            else
            {
                return null;
            }
        }


        [HttpPatch]
        public User ReplaceUser([FromBody] User u)
        {

            User g = _dbContext.Users.FirstOrDefault(g => g.Id == u.Id);
            if (u.DownPayment != null)
            {
                g.DownPayment = u.DownPayment;
            }
            if (u.ZipCode != null)
            {
                g.ZipCode = u.ZipCode;
            }
            if (u.LoanTerm != null)
            {
                g.LoanTerm = u.LoanTerm;
            }
            if (u.InterestRate != null)
            {
                g.InterestRate = u.InterestRate;
            }
            if (u.Loan != null)
            {
                g.Loan = u.Loan;
            }
            if (u.ClosingCost !=  null)
            {
                g.ClosingCost = u.ClosingCost;
            }
            if (u.MaxPrice != null)
            {
                g.MaxPrice = u.MaxPrice;
            }
            if (u.VacancyRate != null)
            {
                g.VacancyRate = u.VacancyRate;
            }
            if (u.NumberOfBedrooms != null)
            {
                g.NumberOfBedrooms = u.NumberOfBedrooms;
            }
            if (u.ManagementFee != null)
            {
                g.ManagementFee = u.ManagementFee;
            }

            _dbContext.Users.Update(g);
            _dbContext.SaveChanges();

            return g;
        }

    }
}


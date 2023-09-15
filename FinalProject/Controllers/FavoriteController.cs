using FinalProject.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FinalProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        RealEstateDbContext dbContext = new RealEstateDbContext();

        // api/Favorite/name
        [HttpGet("{googleId}")]
        public List<Favorite> GetAllByGoogleId(string googleId)
        {
            return dbContext.Favorites.Where(n => n.GoogleId == googleId).ToList();
        }


        // api/Favorite/
        [HttpPost]
        public Favorite AddFavorite([FromBody] Favorite newFav)
        {
            Favorite favorite = new Favorite();
            int x = 0;
            foreach (Favorite f in dbContext.Favorites)
            {
                if (newFav.GoogleId == f.GoogleId && newFav.PropertyId == f.PropertyId)
                {
                    x++;
                }
            }
            if (x == 0)
            {
                favorite.GoogleId = newFav.GoogleId;
                favorite.PropertyId = newFav.PropertyId;
                //favorite.Event = newFav.Event;
                dbContext.Favorites.Add(favorite);
                dbContext.SaveChanges();
            }
            return favorite;
        }


        // api/Favorite/3
        [HttpDelete("{id}")]
        public Favorite DeleteById(int id)
        {
            Favorite deleted = dbContext.Favorites.Find(id);
            dbContext.Favorites.Remove(deleted);
            dbContext.SaveChanges();

            return deleted;
        }
    }
}

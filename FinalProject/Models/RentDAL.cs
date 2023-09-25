using Newtonsoft.Json;
using System.Net;

namespace FinalProject.Models
{
    public class RentDAL
    {
        //public static object PropertiesByPostalDAL { get; internal set; }

        public static RentModel GetForRentByPostal(string postal_code, int beds)//Adjust here
        {
            //adjust
            //setup
            string apiKey = Secret.apiKey;
            string Host = Secret.Host;
            string url = $"https://us-real-estate.p.rapidapi.com/v2/for-rent-by-zipcode?zipcode={postal_code}&limit=10&offset=0&sort=lowest_price&beds_min={beds}";

            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            request.Headers.Add("X-RapidAPI-Key", apiKey);
            request.Headers.Add("X-RapidAPI-Host", Host);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Converting to json
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string json = reader.ReadToEnd();

            //Adjust
            //Convert to C#
            //Install Newtonsoft.json
            
            RentModel result = JsonConvert.DeserializeObject<RentModel>(json);
            return result;
        }
    }
}

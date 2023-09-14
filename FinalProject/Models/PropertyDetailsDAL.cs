using Newtonsoft.Json;
using System.Net;
using FinalProject1.Models;
namespace FinalProject.Models
{
    

    public class PropertyDetailsDAL
    {
        public static PropertyDetailsModel GetPropertyDetails(string propertyId)//Adjust here
        {
            //adjust
            //setup
            string apiKey = Secret.apiKey;
            string Host = Secret.Host;
            string url = $"https://us-real-estate.p.rapidapi.com/v3/property-detail?property_id={propertyId}";

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
            PropertyDetailsModel result = JsonConvert.DeserializeObject<PropertyDetailsModel>(json);
            return result;
        }

    }

}


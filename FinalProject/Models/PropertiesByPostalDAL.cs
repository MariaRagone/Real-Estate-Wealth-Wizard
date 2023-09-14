using Newtonsoft.Json;
using System.Net;

namespace FinalProject.Models
{
    public class PropertiesByPostalDAL
    {
        //public static object PropertiesByPostalDAL { get; internal set; }

        public static PropertiesByPostalModel GetByPostalCode(string postal_code)//Adjust here
        {
            //adjust
            //setup
            string apiKey = Secret.apiKey;
            string Host = Secret.Host;
            string url = $"https://us-real-estate.p.rapidapi.com/v2/for-sale-by-zipcode?zipcode={postal_code}&offset=0&limit=42";

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
            PropertiesByPostalModel result = JsonConvert.DeserializeObject<PropertiesByPostalModel>(json);
            return result;
        }
    }
}

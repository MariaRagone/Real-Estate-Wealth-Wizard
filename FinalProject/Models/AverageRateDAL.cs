using Newtonsoft.Json;
using System.Net;

namespace FinalProject.Models
{
    public class AverageRateDAL
    {
        public static AverageRateModel GetAverageRatesByPostal(string postal_code)//Adjust here
        {
            //adjust
            //setup
            string apiKey = Secret.apiKey;
            string Host = Secret.Host;
            string url = $"https://us-real-estate.p.rapidapi.com/finance/average-rate?postal_code={postal_code}";

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
            AverageRateModel result = JsonConvert.DeserializeObject<AverageRateModel>(json);
            return result;
        }
    }
}

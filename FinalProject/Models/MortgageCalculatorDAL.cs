using Microsoft.AspNetCore.DataProtection;
using Newtonsoft.Json;
using System.Net;

namespace FinalProject.Models
{
    public class MortgageCalculatorDAL
    {
        public static MortgageCalculatorModel GetMortgageCalculations(int loanAmount)//Adjust here
        {
            //adjust
            //setup
            //string apiKey = Secret.apiKey;
            string url = $"https://realty-in-us.p.rapidapi.com/mortgage/v2/calculate?home_insurance=56&property_tax_rate=1.2485549449920654&down_payment=44980&price=224900&term=30&rate=3.827&hoa_fees=0&apply_veterans_benefits=false";

            //request
            HttpWebRequest request = WebRequest.CreateHttp(url);
            HttpWebResponse response = (HttpWebResponse)request.GetResponse();

            //Converting to json
            StreamReader reader = new StreamReader(response.GetResponseStream());
            string json = reader.ReadToEnd();

            //Adjust
            //Convert to C#
            //Install Newtonsoft.json
            MortgageCalculatorModel result = JsonConvert.DeserializeObject<MortgageCalculatorModel>(json);
            return result;
        }
    }
}

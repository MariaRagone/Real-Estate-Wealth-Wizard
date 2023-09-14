using Newtonsoft.Json;
using System.Net;
using FinalProject.Models;
namespace FinalProject.Models
{


    public class MortgageCalculatorDAL
    {
        public static MortgageCalculatorModel CalculateMortgage(bool showAmortization, float hoaFees, float percentTaxRate, int yearTerm, float percentRate, float downPayment, float monthlyHomeInsurance, float price)//Adjust here
    {
        //adjust
        //setup
        string apiKey = Secret.apiKey;
        string Host = Secret.Host;
        string url = $"https://us-real-estate.p.rapidapi.com/finance/mortgage-calculate?show_amortization={showAmortization}&hoa_fees={hoaFees}&percent_tax_rate={percentTaxRate}&year_term={yearTerm}&percent_rate={percentRate}&down_payment={downPayment}&monthly_home_insurance={monthlyHomeInsurance}&price={price}";

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
        MortgageCalculatorModel result = JsonConvert.DeserializeObject<MortgageCalculatorModel>(json);
        return result;
    }

}

}
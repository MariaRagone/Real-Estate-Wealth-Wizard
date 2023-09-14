namespace FinalProject.Models
{

    
    public class MortgageCalculatorModel
    {
        public int status { get; set; }
        public MortgageData data { get; set; }
    }

    public class MortgageData
    {
        public string closing_cost_rate { get; set; }
        public int due_at_close { get; set; }
        public MortgageAmortization[] amortizations { get; set; }
        public int term { get; set; }
        public float monthly_payment { get; set; }
        public float total_payment { get; set; }
        public float monthly_property_taxes { get; set; }
        public string loan_type { get; set; }
        public int monthly_mortgage_insurance { get; set; }
        public int closing_cost { get; set; }
        public int monthly_home_insurance { get; set; }
        public float rate { get; set; }
        public float principal_and_interest { get; set; }
        public int hoa_fees { get; set; }
        public int loan_amount { get; set; }
    }

    public class MortgageAmortization
    {
        public float interest { get; set; }
        public float principal { get; set; }
        public Mortgage_Monthly_Amortization[] monthly_amortization { get; set; }
        public float interest_paid { get; set; }
    }

    public class Mortgage_Monthly_Amortization
    {
        public float interest { get; set; }
        public float principal { get; set; }
        public float interest_paid { get; set; }
        public float balance { get; set; }
    }

}


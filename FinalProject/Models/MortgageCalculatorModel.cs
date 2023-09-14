
public class MortgageCalculatorModel
{
    public Meta meta { get; set; }
    public Mortgage mortgage { get; set; }
}

public class Meta
{
    public string build { get; set; }
}

public class Mortgage
{
    public int loan_amount { get; set; }
    public float rate { get; set; }
    public int term { get; set; }
    public int monthly_payment { get; set; }
    public int principal_and_interest { get; set; }
    public int monthly_property_taxes { get; set; }
    public int monthly_home_insurance { get; set; }
    public int hoa_fees { get; set; }
    public int monthly_mortgage_insurance { get; set; }
    public int total_payment { get; set; }
    public int down_payment { get; set; }
}

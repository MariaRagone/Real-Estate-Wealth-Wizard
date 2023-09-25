namespace FinalProject.Models
{
    public class AverageRateModel
    {
            public int? status { get; set; }
            public AverageRateData data { get; set; }
        }

        public class AverageRateData
        {
            public int? average_rent_price { get; set; }
            public Mortgage_Data mortgage_data { get; set; }
            public int? average_recent_sold_price { get; set; }
            public int? reference_price { get; set; }
            public int? average_sale_price { get; set; }
            public int? for_sale_count { get; set; }
        }

        public class Mortgage_Data
        {
            public Average_Rates[] average_rates { get; set; }
            public Average_Rate average_rate { get; set; }
            public string insurance_rate { get; set; }
            public string property_tax { get; set; }
        }

        public class Average_Rate
        {
            public float thirty_year_fha { get; set; }
            public float thirty_year_va { get; set; }
            public float ten_year_fix { get; set; }
            public float fifteen_year_fix { get; set; }
            public float thirty_year_fix { get; set; }
            public float five_one_arm { get; set; }
            public float seven_one_arm { get; set; }
            public float twenty_year_fix { get; set; }
        }

        public class Average_Rates
        {
            public Loan_Type loan_type { get; set; }
            public float rate { get; set; }
        }

        public class Loan_Type
        {
            public string loan_id { get; set; }
            public string display_name { get; set; }
            public bool is_fixed { get; set; }
            public int? term { get; set; }
            public bool is_va_loan { get; set; }
        }

    }


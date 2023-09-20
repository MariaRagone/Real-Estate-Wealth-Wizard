namespace FinalProject.Models
{

    public class PropertiesByPostalModel
    {
        public int status { get; set; }
        public PostalData data { get; set; }
    }

    public class PostalData
    {
        public Home_Search home_search { get; set; }
        public Geo geo { get; set; }
    }

    public class Home_Search
    {
        public int total { get; set; }
        public int count { get; set; }
        public Result[] results { get; set; }
    }

    public class Result
    {
        public Primary_Photo primary_photo { get; set; }
        public DateTime last_update_date { get; set; }
        public Source source { get; set; }
        public string[] tags { get; set; }
        public string permalink { get; set; }
        public string status { get; set; }
        public DateTime list_date { get; set; }
        public object open_houses { get; set; }
        public Tax_Record tax_record { get; set; }
        public Branding[] branding { get; set; }
        public Photo[] photos { get; set; }
        public object coming_soon_date { get; set; }
        public int list_price { get; set; }
        public bool matterport { get; set; }
        public string property_id { get; set; }
        public PostalFlags flags { get; set; }
        public Postal_Lead_Attributes lead_attributes { get; set; }
        public object community { get; set; }
        //public Products products { get; set; }
        public Postal_Virtual_Tours[] virtual_tours { get; set; }
        public PostalDescription description { get; set; }
        public string listing_id { get; set; }
        public int? price_reduced_amount { get; set; }
        public PostalLocation location { get; set; }
        public Other_Listings other_listings { get; set; }
    }

    public class PostalPrimary_Photo
    {
        public string href { get; set; }
    }

    public class PostalSource
    {
        public Agent[] agents { get; set; }
        public string id { get; set; }
        public object plan_id { get; set; }
        public object spec_id { get; set; }
        public string type { get; set; }
    }

    public class PostalAgent
    {
        public string office_name { get; set; }
    }

    public class Tax_Record
    {
        public string public_record_id { get; set; }
    }

    public class PostalFlags
    {
        public bool? is_new_construction { get; set; }
        public object is_subdivision { get; set; }
        public object is_plan { get; set; }
        public bool? is_price_reduced { get; set; }
        public bool? is_pending { get; set; }
        public object is_foreclosure { get; set; }
        public bool is_new_listing { get; set; }
        public bool? is_coming_soon { get; set; }
        public bool? is_contingent { get; set; }
    }

    public class Postal_Lead_Attributes
    {
        public bool show_contact_an_agent { get; set; }
        public Postal_Opcity_Lead_Attributes opcity_lead_attributes { get; set; }
        public string lead_type { get; set; }
    }

    public class Postal_Opcity_Lead_Attributes
    {
        public bool flip_the_market_enabled { get; set; }
        public bool cashback_enabled { get; set; }
    }

    //public class Products
    //{
    //    public string[] products { get; set; }
    //    public string brand_name { get; set; }
    //}

    public class PostalDescription
    {
        public int? year_built { get; set; }
        public object baths_3qtr { get; set; }
        public string sold_date { get; set; }
        public int? sold_price { get; set; }
        public int? baths_full { get; set; }
        public object name { get; set; }
        public int? baths_half { get; set; }
        public int? lot_sqft { get; set; }
        public int? sqft { get; set; }
        public int baths { get; set; }
        public string sub_type { get; set; }
        public object baths_1qtr { get; set; }
        public int? garage { get; set; }
        public int? stories { get; set; }
        public int? beds { get; set; }
        public string type { get; set; }
    }

    public class PostalLocation
    {
        public PostalAddress address { get; set; }
        public string street_view_url { get; set; }
        public PostalCounty county { get; set; }
    }

    public class PostalAddress
    {
        public string postal_code { get; set; }
        public string state { get; set; }
        public Coordinate coordinate { get; set; }
        public string city { get; set; }
        public string state_code { get; set; }
        public string line { get; set; }
    }

    //public class Coordinate
    //{
    //    public float lon { get; set; }
    //    public float lat { get; set; }
    //}

    public class PostalCounty
    {
        public string fips_code { get; set; }
        public string name { get; set; }
    }

    //public class Other_Listings
    //{
    //    public Rdc[] rdc { get; set; }
    //}

    public class Postal_Rdc
    {
        public string listing_id { get; set; }
        public object listing_key { get; set; }
        public string status { get; set; }
        public bool? primary { get; set; }
    }

    public class Branding
    {
        public string name { get; set; }
        public string photo { get; set; }
        public string type { get; set; }
    }

    public class Postal_Photo
    {
        public string href { get; set; }
    }

    public class Postal_Virtual_Tours
    {
        public object type { get; set; }
        public string href { get; set; }
    }

    public class Geo
    {
        public Parent[] parents { get; set; }
        public Recommended_Zips recommended_zips { get; set; }
        public Recommended_Cities recommended_cities { get; set; }
        public Recommended_Counties recommended_counties { get; set; }
        public Geo_Statistics3 geo_statistics { get; set; }
        public Recommended_Neighborhoods recommended_neighborhoods { get; set; }
    }

    public class Recommended_Zips
    {
        public Geo1[] geos { get; set; }
    }

    public class Geo1
    {
        public string slug_id { get; set; }
        public string postal_code { get; set; }
        public string geo_type { get; set; }
        public Geo_Statistics geo_statistics { get; set; }
    }

    //public class Geo_Statistics
    //{
    //    public Housing_Market housing_market { get; set; }
    //}

    public class Postal_Housing_Market
    {
        public By_Prop_Type[] by_prop_type { get; set; }
        public int median_listing_price { get; set; }
    }

    public class By_Prop_Type
    {
        public Attributes attributes { get; set; }
        public string type { get; set; }
    }

    public class Attributes
    {
        public int median_listing_price { get; set; }
    }

    public class Recommended_Cities
    {
        public Geo2[] geos { get; set; }
    }

    public class Geo2
    {
        public string slug_id { get; set; }
        public string city { get; set; }
        public string state_code { get; set; }
        public string geo_type { get; set; }
        public Geo_Statistics1 geo_statistics { get; set; }
    }

    public class Geo_Statistics1
    {
        public Housing_Market1 housing_market { get; set; }
    }

    public class Housing_Market1
    {
        public By_Prop_Type1[] by_prop_type { get; set; }
        public int median_listing_price { get; set; }
    }

    public class By_Prop_Type1
    {
        public Attributes1 attributes { get; set; }
        public string type { get; set; }
    }

    public class Attributes1
    {
        public int median_listing_price { get; set; }
    }

    public class Recommended_Counties
    {
        public Geo3[] geos { get; set; }
    }

    public class Geo3
    {
        public string slug_id { get; set; }
        public Geo_Statistics2 geo_statistics { get; set; }
        public string state_code { get; set; }
        public string geo_type { get; set; }
        public string county { get; set; }
    }

    public class Geo_Statistics2
    {
        public Housing_Market2 housing_market { get; set; }
    }

    public class Housing_Market2
    {
        public By_Prop_Type2[] by_prop_type { get; set; }
        public int median_listing_price { get; set; }
    }

    public class By_Prop_Type2
    {
        public Attributes2 attributes { get; set; }
        public string type { get; set; }
    }

    public class Attributes2
    {
        public int median_listing_price { get; set; }
    }

    public class Geo_Statistics3
    {
        public Housing_Market3 housing_market { get; set; }
    }

    public class Housing_Market3
    {
        public Month_To_Month month_to_month { get; set; }
        public int median_days_on_market { get; set; }
        public int median_sold_price { get; set; }
        public int median_price_per_sqft { get; set; }
        public int median_listing_price { get; set; }
        public int listing_count { get; set; }
        public By_Prop_Type3[] by_prop_type { get; set; }
        public object median_rent_price { get; set; }
    }

    public class Month_To_Month
    {
        public float median_days_on_market_percent_change { get; set; }
        public float median_listing_price_percent_change { get; set; }
        public float active_listing_count_percent_change { get; set; }
        public float median_listing_price_sqft_percent_change { get; set; }
    }

    public class By_Prop_Type3
    {
        public Attributes3 attributes { get; set; }
        public string type { get; set; }
    }

    public class Attributes3
    {
        public int median_sold_price { get; set; }
        public int median_listing_price { get; set; }
        public int median_days_on_market { get; set; }
        public int median_lot_size { get; set; }
        public int median_price_per_sqft { get; set; }
    }

    public class Recommended_Neighborhoods
    {
        public Geo4[] geos { get; set; }
    }

    public class Geo4
    {
        public string city { get; set; }
        public string state_code { get; set; }
        public string slug_id { get; set; }
        public string neighborhood { get; set; }
        public string geo_type { get; set; }
        public Geo_Statistics4 geo_statistics { get; set; }
    }

    public class Geo_Statistics4
    {
        public Housing_Market4 housing_market { get; set; }
    }

    public class Housing_Market4
    {
        public By_Prop_Type4[] by_prop_type { get; set; }
        public int? median_listing_price { get; set; }
    }

    public class By_Prop_Type4
    {
        public Attributes4 attributes { get; set; }
        public string type { get; set; }
    }

    public class Attributes4
    {
        public int? median_listing_price { get; set; }
    }

    public class Parent
    {
        public string name { get; set; }
        public string geo_type { get; set; }
        public string slug_id { get; set; }
    }

}

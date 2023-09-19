namespace FinalProject.Models
{
    public class PropertyDetailsModel
    {
        public int? status { get; set; }
        public Data? data { get; set; }
    }

    public class Data
    {
        public Photo[]? photos { get; set; }
        public Floorplans? floorplans { get; set; }
        public string[]? tags { get; set; }
        public Other_Listings? other_listings { get; set; }
        public object? days_on_market { get; set; }
        public Local? local { get; set; }
        public object? buyers { get; set; }
        public string? href { get; set; }
        public int? price_per_sqft { get; set; }
        public int? last_sold_price { get; set; }
        public Nearby_Schools? nearby_schools { get; set; }
        public object? builder { get; set; }
        public Advertiser[]? advertisers { get; set; }
        public Virtual_Tours1[]? virtual_tours { get; set; }
        public object? move_in_date { get; set; }
        public string? listing_id { get; set; }
        public Location? location { get; set; }
        //public Home_Tours? home_tours { get; set; }
        public Source? source { get; set; }
        public string? permalink { get; set; }
        public DateTime? list_date { get; set; }
        public object? open_houses { get; set; }
        public string? last_sold_date { get; set; }
        public Description? description { get; set; }
        public object? last_price_change_amount { get; set; }
        public Tax_History[]? tax_history { get; set; }
        public object? suppression_flags { get; set; }
        public Property_History[]? property_history { get; set; }
        public string? status { get; set; }
        public int? photo_count { get; set; }
        public int? list_price { get; set; }
        public object? matterport { get; set; }
        public object? provider_url { get; set; }
        public string? property_id { get; set; }
        public Detail[]? details { get; set; }
        public Flags? flags { get; set; }
        public Products? products { get; set; }
        public object? community { get; set; }
        public Primary_Photo? primary_photo { get; set; }
        public Hoa? hoa { get; set; }
        public Consumer_Advertisers[]? consumer_advertisers { get; set; }
        public Lead_Attributes? lead_attributes { get; set; }
        public Estimates? estimates { get; set; }
    }

    public class Floorplans
    {
        public Floorplan_Interactive? floorplan_interactive { get; set; }
    }

    public class Floorplan_Interactive
    {
    }

    public class Other_Listings
    {
        public Rdc[]? rdc { get; set; }
    }

    public class Rdc
    {
        public bool? unique { get; set; }
        public bool? primary { get; set; }
        public string? listing_id { get; set; }
        public object? listing_key { get; set; }
        public string? status { get; set; }
        public string? sold_date { get; set; }
    }

    public class Local
    {
        public Flood? flood { get; set; }
        public Noise? noise { get; set; }
        public Wildfire? wildfire { get; set; }
    }

    public class Flood
    {
        public string? flood_trend { get; set; }
        public string? flood_factor_severity { get; set; }
    }

    public class Noise
    {
        public Noise_Categories[]? noise_categories { get; set; }
        public int? score { get; set; }
    }

    public class Noise_Categories
    {
        public string? type { get; set; }
        public string? text { get; set; }
    }

    public class Wildfire
    {
        public string? fire_trend { get; set; }
        public string? fire_factor_severity { get; set; }
    }

    public class Nearby_Schools
    {
        public School[]? schools { get; set; }
    }

    public class School
    {
        public float? distance_in_miles { get; set; }
        public District? district { get; set; }
        public string? id { get; set; }
        public int? review_count { get; set; }
        public string? name { get; set; }
        public string? nces_code { get; set; }
        public string? funding_type { get; set; }
        public int? parent_rating { get; set; }
        public string? greatschools_id { get; set; }
        public Coordinate? coordinate { get; set; }
        public string? slug_id { get; set; }
        public string[]? education_levels { get; set; }
        public int? student_count { get; set; }
        public string[]? grades { get; set; }
        public int? rating { get; set; }
    }

    public class District
    {
        public string? name { get; set; }
        public string? id { get; set; }
    }

    public class Coordinate
    {
        public float? lon { get; set; }
        public float? lat { get; set; }
    }

    public class Location
    {
        public Postal_Code? postal_code { get; set; }
        public Address? address { get; set; }
        public string? street_view_url { get; set; }
        public City? city { get; set; }
        public string? street_view_metadata_url { get; set; }
        public object? neighborhoods { get; set; }
        public Search_Areas[]? search_areas { get; set; }
        public County? county { get; set; }
    }

    public class Postal_Code
    {
        public Geo_Statistics? geo_statistics { get; set; }
    }

    public class Geo_Statistics
    {
        public Housing_Market? housing_market { get; set; }
    }

    public class Housing_Market
    {
        public string? hot_market_badge { get; set; }
    }

    public class Address
    {
        public object? street_post_direction { get; set; }
        public string? street_number { get; set; }
        public string? state { get; set; }
        public string? street_suffix { get; set; }
        public string? state_code { get; set; }
        public string? validation_code { get; set; }
        public object? unit { get; set; }
        public string? postal_code { get; set; }
        public object? street_direction { get; set; }
        public string? street_name { get; set; }
        public string? country { get; set; }
        public Coordinate1? coordinate { get; set; }
        public string? line { get; set; }
        public string? city { get; set; }
    }

    public class Coordinate1
    {
        public float? lon { get; set; }
        public float? lat { get; set; }
    }

    public class City
    {
        public bool? county_needed_for_uniq { get; set; }
        public string? slug_id { get; set; }
    }

    public class County
    {
        public string? name { get; set; }
        public string? state_code { get; set; }
        public string? fips_code { get; set; }
    }

    public class Search_Areas
    {
        public string? city { get; set; }
        public string? state_code { get; set; }
    }

    //public class Home_Tours
    //{
    //    public Virtual_Tours[]? virtual_tours { get; set; }
    //}

    //public class Virtual_Tours
    //{
    //    public string? href { get; set; }
    //    public string? category { get; set; }
    //    public string? type { get; set; }
    //}

    public class Source
    {
        public object? community_id { get; set; }
        public string? id { get; set; }
        public string? name { get; set; }
        public Agent[]? agents { get; set; }
        public Disclaimer? disclaimer { get; set; }
        public object? plan_id { get; set; }
        public string? listing_id { get; set; }
        public Raw? raw { get; set; }
        public string? type { get; set; }
    }

    public class Disclaimer
    {
        public object? logo { get; set; }
        public object? href { get; set; }
        public string? text { get; set; }
    }

    public class Raw
    {
        public int? tax_amount { get; set; }
        public string? status { get; set; }
        public string? style { get; set; }
    }

    public class Agent
    {
        public string? office_name { get; set; }
        public string? type { get; set; }
        public string? id { get; set; }
        public string? office_phone { get; set; }
        public string? agent_name { get; set; }
        public string? agent_id { get; set; }
        public string? office_id { get; set; }
    }

    public class Description
    {
        public object? garage_max { get; set; }
        public object? exterior { get; set; }
        public object? sqft_min { get; set; }
        public object? baths_partial_calc { get; set; }
        public string? baths_consolidated { get; set; }
        public object? sub_type { get; set; }
        public object? beds_min { get; set; }
        public int? baths_full { get; set; }
        public object? name { get; set; }
        public object? pool { get; set; }
        public int? baths_full_calc { get; set; }
        public int? garage { get; set; }
        public int? stories { get; set; }
        public string? type { get; set; }
        public object? garage_type { get; set; }
        public object? cooling { get; set; }
        public object? roofing { get; set; }
        public int? sqft { get; set; }
        public object? zoning { get; set; }
        public object? year_renovated { get; set; }
        public object? rooms { get; set; }
        public object? baths_total { get; set; }
        public int? lot_sqft { get; set; }
        public int? year_built { get; set; }
        public object? logo { get; set; }
        public object? baths_3qtr { get; set; }
        public object? units { get; set; }
        public int? beds { get; set; }
        public string[]? styles { get; set; }
        public object? construction { get; set; }
        public object? baths_half { get; set; }
        public string? text { get; set; }
        public object? heating { get; set; }
        public int? baths { get; set; }
        public object? baths_min { get; set; }
        public object? sqft_max { get; set; }
        public object? baths_max { get; set; }
        public object? beds_max { get; set; }
        public object? garage_min { get; set; }
        public object? fireplace { get; set; }
    }

    public class Flags
    {
        public object? is_new_construction { get; set; }
        public object? is_for_rent { get; set; }
        public object? is_subdivision { get; set; }
        public object? is_contingent { get; set; }
        public bool? is_new_listing { get; set; }
        public object? is_price_reduced { get; set; }
        public object? is_deal_available { get; set; }
        public object? is_pending { get; set; }
        public bool? is_garage_present { get; set; }





        public object? is_senior_community { get; set; }
        public object? is_foreclosure { get; set; }
        public object? is_price_excludes_land { get; set; }
        public object? is_coming_soon { get; set; }
        public object? is_short_sale { get; set; }
    }

    public class Products
    {
        public string? brand_name { get; set; }
        public string[]? products { get; set; }
    }
    public class Primary_Photo
    {
        public string? href { get; set; }
    }

    public class Hoa
    {
        public int? fee { get; set; }
    }

    public class Lead_Attributes
    {
        public bool? show_contact_an_agent { get; set; }
        public Ready_Connect_Mortgage? ready_connect_mortgage { get; set; }
        public bool? show_lead_form { get; set; }
        public object? disclaimer_text { get; set; }
        public object? is_tcpa_message_enabled { get; set; }
        public string? lead_type { get; set; }
        public Opcity_Lead_Attributes? opcity_lead_attributes { get; set; }
        public bool? show_text_leads { get; set; }
    }

    public class Ready_Connect_Mortgage
    {
        public bool? show_veterans_united { get; set; }
        public bool? show_contact_a_lender { get; set; }
    }

    public class Opcity_Lead_Attributes
    {
        public bool? smarthome_enabled { get; set; }
        public bool? cashback_enabled { get; set; }
        public object? phones { get; set; }
        public bool? flip_the_market_enabled { get; set; }
    }

    public class Estimates
    {
        public object? current_values { get; set; }
        public Forecast_Values[]? forecast_values { get; set; }
        public Historical_Values[]? historical_values { get; set; }
    }

    public class Forecast_Values
    {
        public Estimate[]? estimates { get; set; }
        public Source1? source { get; set; }
    }

    public class Source1
    {
        public string? type { get; set; }
        public string? name { get; set; }
    }

    public class Estimate
    {
        public int? estimate { get; set; }
        public string? date { get; set; }
    }

    public class Historical_Values
    {
        public Estimate1[]? estimates { get; set; }
        public Source2? source { get; set; }
    }

    public class Source2
    {
        public string? type { get; set; }
        public string? name { get; set; }
    }

    public class Estimate1
    {
        public int? estimate { get; set; }
        public string? date { get; set; }
    }

    public class Photo
    {
        public object? title { get; set; }
        public object? description { get; set; }
        public Tag[]? tags { get; set; }
        public string? href { get; set; }
        public string? type { get; set; }
    }

    public class Tag
    {
        public string? label { get; set; }
        public float? probability { get; set; }
    }

    public class Advertiser
    {
        public object? slogan { get; set; }
        public string? state_license { get; set; }
        public Photo1? photo { get; set; }
        public string? email { get; set; }
        public Phone1[]? phones { get; set; }
        public Address1? address { get; set; }
        public object? href { get; set; }
        public string? fulfillment_id { get; set; }
        public Office? office { get; set; }
        public Broker? broker { get; set; }
        public string? name { get; set; }
        public object? builder { get; set; }
        public object? team_name { get; set; }
        public string? type { get; set; }
        public string? mls_set { get; set; }
        public string? nrds_id { get; set; }
        public object? team { get; set; }
    }

    public class Photo1
    {
        public string? href { get; set; }
    }

    public class Address1
    {
        public string? postal_code { get; set; }
        public string? city { get; set; }
        public string? country { get; set; }
        public object? state_code { get; set; }
        public string? line { get; set; }
        public string? state { get; set; }
    }

    public class Office
    {
        public string? slogan { get; set; }
        public object? application_url { get; set; }
        public string? name { get; set; }
        public string? mls_set { get; set; }
        public string? email { get; set; }
        public object? lead_email { get; set; }
        public Address2? address { get; set; }
        public object? hours { get; set; }
        public Photo2? photo { get; set; }
        public Phone[]? phones { get; set; }
        public string? href { get; set; }
        public object? out_of_community { get; set; }
        public string? fulfillment_id { get; set; }
    }

    public class Address2
    {
        public string? postal_code { get; set; }
        public string? city { get; set; }
        public string? state_code { get; set; }
        public string? country { get; set; }
        public object? state { get; set; }
        public string? line { get; set; }
        public Coordinate2? coordinate { get; set; }
    }

    public class Coordinate2
    {
        public object? lon { get; set; }
        public object? lat { get; set; }
    }

    public class Photo2
    {
        public string? href { get; set; }
    }

    public class Phone
    {
        public object? trackable { get; set; }
        public string? number { get; set; }
        public string? ext { get; set; }
        public bool? primary { get; set; }
        public string? type { get; set; }
    }

    public class Broker
    {
        public string? logo { get; set; }
        public string? accent_color { get; set; }
        public string? name { get; set; }
        public Designations? designations { get; set; }
        public string? fulfillment_id { get; set; }
    }

    public class Designations
    {
    }

    public class Phone1
    {
        public object? trackable { get; set; }
        public string? number { get; set; }
        public string? ext { get; set; }
        public bool? primary { get; set; }
        public string? type { get; set; }
    }

    public class Virtual_Tours1
    {
        public object? type { get; set; }
        public string? href { get; set; }
    }

    public class Tax_History
    {
        public Assessment? assessment { get; set; }
        public int? tax { get; set; }
        public int? year { get; set; }
        public Market? market { get; set; }
    }

    public class Assessment
    {
        public object? building { get; set; }
        public int? total { get; set; }
        public object? land { get; set; }
    }

    public class Market
    {
        public object? building { get; set; }
        public int? total { get; set; }
        public object? land { get; set; }
    }





    public class Property_History
    {
        public string? event_name { get; set; }
        public string? date { get; set; }
        public object? listing { get; set; }
        public float? price_sqft { get; set; }
        public string? source_name { get; set; }
        public string? source_listing_id { get; set; }
        public int? price { get; set; }
    }

    public class Detail
    {
        public string? parent_category { get; set; }
        public string? category { get; set; }
        public string[]? text { get; set; }
    }

    public class Consumer_Advertisers
    {
        public object? slogan { get; set; }
        public object? contact_name { get; set; }
        public bool? show_realtor_logo { get; set; }
        public string? name { get; set; }
        public Photo3? photo { get; set; }
        public string? office_id { get; set; }
        public string? href { get; set; }
        public Address3? address { get; set; }
        public object? hours { get; set; }
        public object? broker_id { get; set; }
        public string? agent_id { get; set; }
        public string? phone { get; set; }
        public string? advertiser_id { get; set; }
        public string? type { get; set; }
    }

    public class Photo3
    {
        public object? href { get; set; }
        public object? type { get; set; }
        public object? description { get; set; }
    }

    public class Address3
    {
        public string? city { get; set; }
        public string? state_code { get; set; }
    }
}

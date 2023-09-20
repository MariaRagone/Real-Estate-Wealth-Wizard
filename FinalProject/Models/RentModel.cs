namespace FinalProject.Models
{

    public class RentModel
    {
        public int status { get; set; }
        public RentData data { get; set; }
    }

    public class RentData
    {
        public RentHome_Search home_search { get; set; }
        public RentGeo geo { get; set; }
    }

    public class RentHome_Search
    {
        public int total { get; set; }
        public int count { get; set; }
        public List<RentResult> results { get; set; }
    }

    public class RentResult
    {
        public RentPhoto[] photos { get; set; }
        public object branding { get; set; }
        public RentOther_Listings other_listings { get; set; }
        public int? list_price_min { get; set; }
        public string href { get; set; }
        public DateTime when_indexed { get; set; }
        public object last_sold_price { get; set; }
        public string property_id { get; set; }
        public RentAdvertiser[] advertisers { get; set; }
        public RentVirtual_Tours[] virtual_tours { get; set; }
        public object seller_promotion { get; set; }
        public string listing_id { get; set; }
        public object price_reduced_amount { get; set; }
        public RentLocation location { get; set; }
        public DateTime last_update_date { get; set; }
        public RentSource source { get; set; }
        public string permalink { get; set; }
        public DateTime? list_date { get; set; }
        public object open_houses { get; set; }
        public object last_sold_date { get; set; }
        public DateTime? last_price_change_date { get; set; }
        public RentDescription description { get; set; }
        public int? last_price_change_amount { get; set; }
        public object price_reduced_date { get; set; }
        public object property_history { get; set; }
        public int? photo_count { get; set; }
        public int? list_price { get; set; }
        public RentLead_Attributes lead_attributes { get; set; }
        public int? list_price_max { get; set; }
        public string[] tags { get; set; }
        //public RentPet_Policy pet_policy { get; set; }
        public RentProducts products { get; set; }
        public RentSuppression_Flags suppression_flags { get; set; }
        public string status { get; set; }
        public RentFlags flags { get; set; }
        public object community { get; set; }
        public bool matterport { get; set; }
        public RentPrimary_Photo primary_photo { get; set; }
    }

    public class RentOther_Listings
    {
        public RentRdc[] rdc { get; set; }
    }

    public class RentRdc
    {
        public string listing_id { get; set; }
        public string status { get; set; }
        public bool? primary { get; set; }
    }

    public class RentLocation
    {
        public RentCounty county { get; set; }
        public RentAddress address { get; set; }
        public RentSearch_Areas[] search_areas { get; set; }
        public RentNeighborhood[] neighborhoods { get; set; }
    }

    public class RentCounty
    {
        public string name { get; set; }
        public string state_code { get; set; }
        public string fips_code { get; set; }
    }

    public class RentAddress
    {
        public object street_post_direction { get; set; }
        public string street_number { get; set; }
        public string state { get; set; }
        public string street_suffix { get; set; }
        public string state_code { get; set; }
        public object unit { get; set; }
        public string postal_code { get; set; }
        public string street_direction { get; set; }
        public string street_name { get; set; }
        public string country { get; set; }
        public RentCoordinate coordinate { get; set; }
        public string line { get; set; }
        public string city { get; set; }
    }

    public class RentCoordinate
    {
        public float lon { get; set; }
        public float lat { get; set; }
    }

    public class RentSearch_Areas
    {
        public string city { get; set; }
        public string state_code { get; set; }
    }

    public class RentNeighborhood
    {
        public string city { get; set; }
        public string level { get; set; }
        public string name { get; set; }
        public string state_code { get; set; }
        public string id { get; set; }
    }

    public class RentSource
    {
        public object agents { get; set; }
        public int? community_id { get; set; }
        public string id { get; set; }
        public string listing_id { get; set; }
        public string name { get; set; }
        public object raw { get; set; }
        public string type { get; set; }
    }

    public class RentDescription
    {
        public object garage_max { get; set; }
        public int? sqft_min { get; set; }
        public object baths_partial_calc { get; set; }
        public object baths_1qtr { get; set; }
        public int? beds_max { get; set; }
        public object lot_sqft { get; set; }
        public string sub_type { get; set; }
        public object garage { get; set; }
        public object baths_3qtr { get; set; }
        public object garage_min { get; set; }
        public int? beds_min { get; set; }
        public int? baths_min { get; set; }
        public string name { get; set; }
        public object baths_half { get; set; }
        public object sqft { get; set; }
        public int? year_built { get; set; }
        public int? baths { get; set; }
        public int? baths_full { get; set; }
        public int? sqft_max { get; set; }
        public int? baths_max { get; set; }
        public int? baths_full_calc { get; set; }
        public int? beds { get; set; }
        public string type { get; set; }
    }

    public class RentLead_Attributes
    {
        public bool show_contact_an_agent { get; set; }
    }

    //public class RentPet_Policy
    //{
    //    public bool cats { get; set; }
    //    public bool dogs { get; set; }
    //    public bool dogs_large { get; set; }
    //    public bool dogs_small { get; set; }
    //    public object text { get; set; }
    //}

    public class RentProducts
    {
        public string[] products { get; set; }
        public object product_attributes { get; set; }
    }

    public class RentSuppression_Flags
    {
        public bool has_suppress_foreclosure { get; set; }
        public bool has_suppress_list_date { get; set; }
        public bool has_suppress_management_company_logo { get; set; }
        public bool has_suppress_management_company_other_listings { get; set; }
        public bool has_suppress_management_company_name { get; set; }
        public bool has_suppress_management_company_url { get; set; }
    }

    public class RentFlags
    {
        public object is_deal_available { get; set; }
        public object is_senior_community { get; set; }
        public bool? is_new_listing { get; set; }
        public bool is_for_rent { get; set; }
        public object is_garage_present { get; set; }
    }

    public class RentPrimary_Photo
    {
        public string href { get; set; }
        public object type { get; set; }
        public object description { get; set; }
    }

    public class RentPhoto
    {
        public object title { get; set; }
        public object description { get; set; }
        public object tags { get; set; }
        public string href { get; set; }
        public object type { get; set; }
    }

    public class RentAdvertiser
    {
        public RentOffice office { get; set; }
        public object broker { get; set; }
        public object name { get; set; }
        public object mls_set { get; set; }
        public object email { get; set; }
        public object nrds_id { get; set; }
        public string type { get; set; }
        public object slogan { get; set; }
        public object photo { get; set; }
        public object href { get; set; }
        public object phones { get; set; }
        public object fulfillment_id { get; set; }
    }

    public class RentOffice
    {
        public RentPhone[] phones { get; set; }
        public RentLead_Email lead_email { get; set; }
        public object photo { get; set; }
        public string name { get; set; }
        public object fulfillment_id { get; set; }
        public string href { get; set; }
        public object mls_set { get; set; }
        public string email { get; set; }
    }

    public class RentLead_Email
    {
        public string to { get; set; }
        public object cc { get; set; }
    }

    public class RentPhone
    {
        public bool? trackable { get; set; }
        public string number { get; set; }
        public object ext { get; set; }
        public bool primary { get; set; }
        public string type { get; set; }
    }

    public class RentVirtual_Tours
    {
        public string href { get; set; }
    }

    public class RentGeo
    {
        public RentParent[] parents { get; set; }
        public RentRecommended_Zips recommended_zips { get; set; }
        public RentRecommended_Cities recommended_cities { get; set; }
        public RentRecommended_Counties recommended_counties { get; set; }
        public RentGeo_Statistics3 geo_statistics { get; set; }
        public RentRecommended_Neighborhoods recommended_neighborhoods { get; set; }
    }

    public class RentRecommended_Zips
    {
        public RentGeo1[] geos { get; set; }
    }

    public class RentGeo1
    {
        public string slug_id { get; set; }
        public string postal_code { get; set; }
        public string geo_type { get; set; }
        public RentGeo_Statistics geo_statistics { get; set; }
    }

    public class RentGeo_Statistics
    {
        public RentHousing_Market housing_market { get; set; }
    }

    public class RentHousing_Market
    {
        public int? median_rent_price { get; set; }
    }

    public class RentRecommended_Cities
    {
        public RentGeo2[] geos { get; set; }
    }

    public class RentGeo2
    {
        public string slug_id { get; set; }
        public string city { get; set; }
        public string state_code { get; set; }
        public string geo_type { get; set; }
        public RentGeo_Statistics1 geo_statistics { get; set; }
    }

    public class RentGeo_Statistics1
    {
        public RentHousing_Market1 housing_market { get; set; }
    }

    public class RentHousing_Market1
    {
        public int? median_rent_price { get; set; }
    }

    public class RentRecommended_Counties
    {
        public RentGeo3[] geos { get; set; }
    }

    public class RentGeo3
    {
        public string slug_id { get; set; }
        public RentGeo_Statistics2 geo_statistics { get; set; }
        public string state_code { get; set; }
        public string geo_type { get; set; }
        public string county { get; set; }
    }

    public class RentGeo_Statistics2
    {
        public RentHousing_Market2 housing_market { get; set; }
    }

    public class RentHousing_Market2
    {
        public int? median_rent_price { get; set; }
    }

    public class RentGeo_Statistics3
    {
        public object market_trends { get; set; }
    }

    public class RentRecommended_Neighborhoods
    {
        public RentGeo4[] geos { get; set; }
    }

    public class RentGeo4
    {
        public string city { get; set; }
        public string state_code { get; set; }
        public string slug_id { get; set; }
        public string neighborhood { get; set; }
        public string geo_type { get; set; }
        public RentGeo_Statistics4 geo_statistics { get; set; }
    }

    public class RentGeo_Statistics4
    {
        public RentHousing_Market3 housing_market { get; set; }
    }

    public class RentHousing_Market3
    {
        public int? median_rent_price { get; set; }
    }

    public class RentParent
    {
        public string name { get; set; }
        public string geo_type { get; set; }
        public string slug_id { get; set; }
    }

}

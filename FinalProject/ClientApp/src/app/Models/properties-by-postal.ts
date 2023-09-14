export interface PropertiesByPostal {

        status: number;
        data:   Data;
    }
    
    export interface Data {
        home_search: HomeSearch;
        geo:         DataGeo;
    }
    
    export interface DataGeo {
        parents:                   Parent[];
        recommended_zips:          RecommendedZips;
        recommended_cities:        RecommendedCties;
        recommended_counties:      RecommendedCties;
        geo_statistics:            PurpleGeoStatistics;
        recommended_neighborhoods: RecommendedNeighborhoods;
    }
    
    export interface PurpleGeoStatistics {
        housing_market: PurpleHousingMarket;
    }
    
    export interface PurpleHousingMarket {
        month_to_month:        MonthToMonth;
        median_days_on_market: number;
        median_sold_price:     null;
        median_price_per_sqft: number;
        median_listing_price:  number;
        listing_count:         number;
        by_prop_type:          PurpleByPropType[];
        median_rent_price:     number;
    }
    
    export interface PurpleByPropType {
        attributes: PurpleAttributes;
        type:       ByPropTypeType;
    }
    
    export interface PurpleAttributes {
        median_sold_price:     null;
        median_listing_price:  number;
        median_days_on_market: number;
        median_lot_size:       number;
        median_price_per_sqft: number;
    }
    
    export enum ByPropTypeType {
        Home = "home",
    }
    
    export interface MonthToMonth {
        median_days_on_market_percent_change:     number;
        median_listing_price_percent_change:      number;
        active_listing_count_percent_change:      number;
        median_listing_price_sqft_percent_change: number;
    }
    
    export interface Parent {
        name:     string;
        geo_type: string;
        slug_id:  string;
    }
    
    export interface RecommendedCties {
        geos: RecommendedCitiesGeo[];
    }
    
    export interface RecommendedCitiesGeo {
        slug_id:        string;
        city?:          string;
        state_code:     StateCode;
        geo_type:       PurpleGeoType;
        geo_statistics: FluffyGeoStatistics;
        county?:        string;
    }
    
    export interface FluffyGeoStatistics {
        housing_market: FluffyHousingMarket;
    }
    
    export interface FluffyHousingMarket {
        by_prop_type:         FluffyByPropType[];
        median_listing_price: number | null;
    }
    
    export interface FluffyByPropType {
        attributes: FluffyAttributes;
        type:       ByPropTypeType;
    }
    
    export interface FluffyAttributes {
        median_listing_price: number | null;
    }
    
    export enum PurpleGeoType {
        City = "city",
        County = "county",
    }
    
    export enum StateCode {
        La = "LA",
        Tx = "TX",
    }
    
    export interface RecommendedNeighborhoods {
        geos: RecommendedNeighborhoodsGeo[];
    }
    
    export interface RecommendedNeighborhoodsGeo {
        city:           City;
        state_code:     StateCode;
        slug_id:        string;
        neighborhood:   string;
        geo_type:       FluffyGeoType;
        geo_statistics: FluffyGeoStatistics;
    }
    
    export enum City {
        Dickinson = "Dickinson",
        Galveston = "Galveston",
        LeagueCity = "League City",
        TexasCity = "Texas City",
    }
    
    export enum FluffyGeoType {
        Neighborhood = "neighborhood",
    }
    
    export interface RecommendedZips {
        geos: RecommendedZipsGeo[];
    }
    
    export interface RecommendedZipsGeo {
        slug_id:        string;
        postal_code:    string;
        geo_type:       TentacledGeoType;
        geo_statistics: FluffyGeoStatistics;
    }
    
    export enum TentacledGeoType {
        PostalCode = "postal_code",
    }
    
    export interface HomeSearch {
        total:   number;
        count:   number;
        results: Result[];
    }
    
    export interface Result {
        primary_photo:        Photo | null;
        last_update_date:     Date;
        source:               Source;
        tags:                 string[] | null;
        permalink:            string;
        status:               Status;
        list_date:            Date;
        open_houses:          OpenHouse[] | null;
        tax_record:           TaxRecord | null;
        branding:             Branding[];
        photos:               Photo[] | null;
        coming_soon_date:     null;
        list_price:           number;
        matterport:           boolean;
        property_id:          string;
        flags:                Flags;
        lead_attributes:      LeadAttributes;
        community:            null;
        products:             Products;
        virtual_tours:        VirtualTour[] | null;
        description:          Description;
        listing_id:           string;
        price_reduced_amount: number | null;
        location:             Location;
        other_listings:       OtherListings;
    }
    
    export interface Branding {
        name:  string;
        photo: null;
        type:  BrandingType;
    }
    
    export enum BrandingType {
        Office = "Office",
    }
    
    export interface Description {
        year_built: number | null;
        baths_3qtr: null;
        sold_date:  Date | null;
        sold_price: null;
        baths_full: number | null;
        name:       null;
        baths_half: number | null;
        lot_sqft:   number | null;
        sqft:       number | null;
        baths:      number;
        sub_type:   null | string;
        baths_1qtr: null;
        garage:     number | null;
        stories:    number | null;
        beds:       number | null;
        type:       DescriptionType;
    }
    
    export enum DescriptionType {
        Condos = "condos",
        Land = "land",
        MultiFamily = "multi_family",
        SingleFamily = "single_family",
    }
    
    export interface Flags {
        is_new_construction: boolean | null;
        is_subdivision:      null;
        is_plan:             null;
        is_price_reduced:    boolean | null;
        is_pending:          boolean | null;
        is_foreclosure:      null;
        is_new_listing:      boolean;
        is_coming_soon:      null;
        is_contingent:       null;
    }
    
    export interface LeadAttributes {
        show_contact_an_agent:  boolean;
        opcity_lead_attributes: OpcityLeadAttributes;
        lead_type:              LeadType;
    }
    
    export enum LeadType {
        CoBroke = "co_broke",
        CoreAgent = "core.agent",
        CoreBroker = "core.broker",
    }
    
    export interface OpcityLeadAttributes {
        flip_the_market_enabled: boolean;
        cashback_enabled:        boolean;
    }
    
    export interface Location {
        address:         Address;
        street_view_url: string;
        county:          County;
    }
    
    export interface Address {
        postal_code: string;
        state:       State;
        coordinate:  Coordinate | null;
        city:        City;
        state_code:  StateCode;
        line:        string;
    }
    
    export interface Coordinate {
        lon: number;
        lat: number;
    }
    
    export enum State {
        Texas = "Texas",
    }
    
    export interface County {
        fips_code: null | string;
        name:      City;
    }
    
    export interface OpenHouse {
        start_date:  Date;
        methods:     string[];
        description: null | string;
        end_date:    Date;
        dst:         boolean;
        time_zone:   string;
    }
    
    export interface OtherListings {
        rdc: RDC[];
    }
    
    export interface RDC {
        listing_id:  string;
        listing_key: null;
        status:      Status;
        primary:     boolean | null;
    }
    
    export enum Status {
        ForSale = "for_sale",
        OffMarket = "off_market",
        Sold = "sold",
    }
    
    export interface Photo {
        href: string;
    }
    
    export interface Products {
        products:   LeadType[];
        brand_name: BrandName;
    }
    
    export enum BrandName {
        BasicOptIn = "basic_opt_in",
        Essentials = "essentials",
    }
    
    export interface Source {
        agents:  Agent[];
        id:      ID;
        plan_id: null;
        spec_id: null;
        type:    SourceType;
    }
    
    export interface Agent {
        office_name: null | string;
    }
    
    export enum ID {
        Hotx = "HOTX",
    }
    
    export enum SourceType {
        Mls = "mls",
    }
    
    export interface TaxRecord {
        public_record_id: string;
    }
    
    export interface VirtualTour {
        type: null;
        href: string;
    }
    


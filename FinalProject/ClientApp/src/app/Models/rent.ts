    export interface Rent {
        status: number;
        data: RentData;
    }

    export interface RentData {
        home_search: RentHome_Search;
        geo: RentGeo;
    }

    export interface RentHome_Search {
        total: number;
        count: number;
        results: RentResult[];
    }

    export interface RentResult {
        photos: RentPhoto[];
        branding: any;
        other_listings: RentOther_Listings;
        list_price_min: number | null;
        href: string;
        when_indexed: Date;
        last_sold_price: any;
        property_id: string;
        advertisers: RentAdvertiser[];
        virtual_tours: RentVirtual_Tours[];
        seller_promotion: any;
        listing_id: string;
        price_reduced_amount: any;
        location: RentLocation;
        last_update_date: Date;
        source: RentSource;
        permalink: string;
        list_date: Date | null;
        open_houses: any;
        last_sold_date: Date | null;
        last_price_change_date: Date | null;
        description: RentDescription;
        last_price_change_amount: number | null;
        price_reduced_date: any;
        property_history: any;
        photo_count: number | null;
        list_price: number | null;
        lead_attributes: RentLead_Attributes;
        list_price_max: number | null;
        tags: string[];
        // pet_policy: RentPet_Policy;
        products: RentProducts;
        suppression_flags: RentSuppression_Flags;
        status: string;
        flags: RentFlags;
        community: any;
        matterport: boolean;
        primary_photo: RentPrimary_Photo;
    }

    export interface RentOther_Listings {
        rdc: RentRdc[];
    }

    export interface RentRdc {
        listing_id: string;
        status: string;
        primary: boolean | null;
    }

    export interface RentLocation {
        county: RentCounty;
        address: RentAddress;
        search_areas: RentSearch_Areas[];
        neighborhoods: RentNeighborhood[];
    }

    export interface RentCounty {
        name: string;
        state_code: string;
        fips_code: string;
    }

    export interface RentAddress {
        street_post_direction: any;
        street_number: string;
        state: string;
        street_suffix: string;
        state_code: string;
        unit: any;
        postal_code: string;
        street_direction: string;
        street_name: string;
        country: string;
        coordinate: RentCoordinate;
        line: string;
        city: string;
    }

    export interface RentCoordinate {
        lon: number;
        lat: number;
    }

    export interface RentSearch_Areas {
        city: string;
        state_code: string;
    }

    export interface RentNeighborhood {
        city: string;
        level: string;
        name: string;
        state_code: string;
        id: string;
    }

    export interface RentSource {
        agents: any;
        community_id: number | null;
        id: string;
        listing_id: string;
        name: string;
        raw: any;
        type: string;
    }

    export interface RentDescription {
        garage_max: any;
        sqft_min: number | null;
        baths_partial_calc: any;
        baths_1qtr: any;
        beds_max: number | null;
        lot_sqft: any;
        sub_type: string;
        garage: any;
        baths_3qtr: any;
        garage_min: any;
        beds_min: number | null;
        baths_min: number | null;
        name: string;
        baths_half: any;
        sqft: number | null;
        year_built: number | null;
        baths: number | null;
        baths_full: number | null;
        sqft_max: number | null;
        baths_max: number | null;
        baths_full_calc: number | null;
        beds: number | null;
        type: string;
    }

    export interface RentLead_Attributes {
        show_contact_an_agent: boolean;
    }

    // export interface RentPet_Policy {
    //     cats: boolean;
    //     dogs: boolean;
    //     dogs_large: boolean;
    //     dogs_small: boolean;
    //     text: any;
    // }

    export interface RentProducts {
        products: string[];
        product_attributes: any;
    }

    export interface RentSuppression_Flags {
        has_suppress_foreclosure: boolean;
        has_suppress_list_date: boolean;
        has_suppress_management_company_logo: boolean;
        has_suppress_management_company_other_listings: boolean;
        has_suppress_management_company_name: boolean;
        has_suppress_management_company_url: boolean;
    }

    export interface RentFlags {
        is_deal_available: any;
        is_senior_community: any;
        is_new_listing: boolean | null;
        is_for_rent: boolean;
        is_garage_present: any;
    }

    export interface RentPrimary_Photo {
        href: string;
        type: any;
        description: any;
    }

    export interface RentPhoto {
        title: any;
        description: any;
        tags: any;
        href: string;
        type: any;
    }

    export interface RentAdvertiser {
        office: RentOffice;
        broker: any;
        name: any;
        mls_set: any;
        email: any;
        nrds_id: any;
        type: string;
        slogan: any;
        photo: any;
        href: any;
        phones: any;
        fulfillment_id: any;
    }

    export interface RentOffice {
        phones: RentPhone[];
        lead_email: RentLead_Email;
        photo: any;
        name: string;
        fulfillment_id: string;
        href: any;
        mls_set: any;
        email: string;
    }

    export interface RentLead_Email {
        to: string;
        cc: any;
    }

    export interface RentPhone {
        trackable: boolean | null;
        number: string;
        ext: any;
        primary: boolean;
        type: string;
    }

    export interface RentVirtual_Tours {
        href: string;
    }

    export interface RentGeo {
        parents: RentParent[];
        recommended_zips: RentRecommended_Zips;
        recommended_cities: RentRecommended_Cities;
        recommended_counties: RentRecommended_Counties;
        geo_statistics: RentGeo_Statistics3;
        recommended_neighborhoods: RentRecommended_Neighborhoods;
    }

    export interface RentRecommended_Zips {
        geos: RentGeo1[];
    }

    export interface RentGeo1 {
        slug_id: string;
        postal_code: string;
        geo_type: string;
        geo_statistics: RentGeo_Statistics;
    }

    export interface RentGeo_Statistics {
        housing_market: RentHousing_Market;
    }

    export interface RentHousing_Market {
        median_rent_price: number | null;
    }

    export interface RentRecommended_Cities {
        geos: RentGeo2[];
    }

    export interface RentGeo2 {
        slug_id: string;
        city: string;
        state_code: string;
        geo_type: string;
        geo_statistics: RentGeo_Statistics1;
    }

    export interface RentGeo_Statistics1 {
        housing_market: RentHousing_Market1;
    }

    export interface RentHousing_Market1 {
        median_rent_price: number | null;
    }

    export interface RentRecommended_Counties {
        geos: RentGeo3[];
    }

    export interface RentGeo3 {
        slug_id: string;
        geo_statistics: RentGeo_Statistics2;
        state_code: string;
        geo_type: string;
        county: string;
    }

    export interface RentGeo_Statistics2 {
        housing_market: RentHousing_Market2;
    }

    export interface RentHousing_Market2 {
        median_rent_price: number | null;
    }

    export interface RentGeo_Statistics3 {
        market_trends: any;
    }

    export interface RentRecommended_Neighborhoods {
        geos: RentGeo4[];
    }

    export interface RentGeo4 {
        city: string;
        state_code: string;
        slug_id: string;
        neighborhood: string;
        geo_type: string;
        geo_statistics: RentGeo_Statistics4;
    }

    export interface RentGeo_Statistics4 {
        housing_market: RentHousing_Market3;
    }

    export interface RentHousing_Market3 {
        median_rent_price: number | null;
    }

    export interface RentParent {
        name: string;
        geo_type: string;
        slug_id: string;
    }

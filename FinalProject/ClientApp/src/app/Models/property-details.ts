export interface PropertyDetails {
  status: number;
  data: Data;
}

export interface Data {
  photos: PhotoElement[];
  floorplans: Floorplans;
  tags: string[];
  other_listings: OtherListings;
  days_on_market: null;
  local: Local;
  buyers: null;
  href: string;
  price_per_sqft: number;
  last_sold_price: null;
  nearby_schools: NearbySchools;
  builder: null;
  advertisers: Advertiser[];
  virtual_tours: DataVirtualTour[];
  move_in_date: null;
  listing_id: string;
  location: Location;
  home_tours: HomeTours;
  source: DataSource;
  permalink: string;
  list_date: Date;
  open_houses: null;
  last_sold_date: null;
  description: Description;
  last_price_change_amount: null;
  tax_history: TaxHistory[];
  suppression_flags: SuppressionFlags;
  property_history: PropertyHistory[];
  status: string;
  photo_count: number;
  list_price: number;
  matterport: null;
  provider_url: null;
  property_id: string;
  details: Detail[];
  flags: { [key: string]: boolean | null };
  products: Products;
  community: null;
  primary_photo: PrimaryPhotoClass;
  hoa: null;
  consumer_advertisers: ConsumerAdvertiser[];
  lead_attributes: LeadAttributes;
  estimates: Estimates;
}

export interface Advertiser {
  slogan: string;
  state_license: string;
  photo: PrimaryPhotoClass;
  email: string;
  phones: OfficePhone[];
  address: AdvertiserAddress;
  href: string;
  fulfillment_id: string;
  office: Office;
  broker: Broker;
  name: string;
  builder: null;
  team_name: null;
  type: string;
  mls_set: string;
  nrds_id: string;
  team: null;
}

export interface AdvertiserAddress {
  postal_code: string;
  city: string;
  country: string;
  state_code: string;
  line: string;
  state: string;
  coordinate?: Coordinate;
}

export interface Coordinate {
  lon: number | null;
  lat: number | null;
}

export interface Broker {
  logo: string;
  accent_color: string;
  name: string;
  designations: FloorplanInteractive;
  fulfillment_id: string;
}

export interface FloorplanInteractive {}

export interface Office {
  slogan: string;
  application_url: null;
  name: string;
  mls_set: string;
  email: string;
  lead_email: null;
  address: AdvertiserAddress;
  hours: null;
  photo: PrimaryPhotoClass;
  phones: OfficePhone[];
  href: string;
  out_of_community: null;
  fulfillment_id: string;
}

export interface OfficePhone {
  trackable: null;
  number: string;
  ext: string;
  primary: boolean;
  type: string;
}

export interface PrimaryPhotoClass {
  href: string;
}

export interface ConsumerAdvertiser {
  slogan: null;
  contact_name: null;
  show_realtor_logo: boolean;
  name: string;
  photo: ConsumerAdvertiserPhoto;
  office_id: string;
  href: string;
  address: SearchArea | null;
  hours: null;
  broker_id: string;
  agent_id: string;
  phone: null | string;
  advertiser_id: string;
  type: string;
}

export interface SearchArea {
  city: string;
  state_code: string;
}

export interface ConsumerAdvertiserPhoto {
  href: null | string;
  type: null;
  description: null;
}

export interface Description {
  garage_max: null;
  exterior: null;
  sqft_min: null;
  baths_partial_calc: null;
  baths_consolidated: string;
  sub_type: null;
  beds_min: null;
  baths_full: number;
  name: null;
  pool: null;
  baths_full_calc: number;
  garage: number;
  stories: number;
  type: string;
  garage_type: null;
  cooling: null;
  roofing: null;
  sqft: number;
  zoning: null;
  year_renovated: null;
  rooms: null;
  baths_total: null;
  lot_sqft: number;
  year_built: number;
  logo: null;
  baths_3qtr: number;
  units: null;
  beds: number;
  styles: null;
  construction: null;
  baths_half: null;
  text: string;
  heating: null;
  baths: number;
  baths_min: null;
  sqft_max: null;
  baths_max: null;
  beds_max: null;
  garage_min: null;
  fireplace: null;
}

export interface Detail {
  parent_category: string;
  category: string;
  text: string[];
}

export interface Estimates {
  current_values: null;
  forecast_values: Value[];
  historical_values: Value[];
}

export interface Value {
  estimates: Estimate[];
  source: ForecastValueSource;
}

export interface Estimate {
  estimate: number;
  date: Date;
}

export interface ForecastValueSource {
  type: string;
  name: string;
}

export interface Floorplans {
  floorplan_interactive: FloorplanInteractive;
}

export interface HomeTours {
  virtual_tours: HomeToursVirtualTour[];
}

export interface HomeToursVirtualTour {
  href: string;
  category: string;
  type: string;
}

export interface LeadAttributes {
  show_contact_an_agent: boolean;
  ready_connect_mortgage: ReadyConnectMortgage;
  show_lead_form: boolean;
  disclaimer_text: null;
  is_tcpa_message_enabled: null;
  lead_type: string;
  opcity_lead_attributes: OpcityLeadAttributes;
  show_text_leads: boolean;
}

export interface OpcityLeadAttributes {
  smarthome_enabled: boolean;
  cashback_enabled: boolean;
  phones: OpcityLeadAttributesPhone[];
  flip_the_market_enabled: boolean;
}

export interface OpcityLeadAttributesPhone {
  number: string;
  category: string;
}

export interface ReadyConnectMortgage {
  show_veterans_united: boolean;
  show_contact_a_lender: boolean;
}

export interface Local {
  flood: Flood;
  noise: Noise;
  wildfire: Wildfire;
}

export interface Flood {
  flood_trend: string;
  flood_factor_severity: string;
}

export interface Noise {
  noise_categories: NoiseCategory[];
  score: number;
}

export interface NoiseCategory {
  type: string;
  text: string;
}

export interface Wildfire {
  fire_trend: string;
  fire_factor_severity: string;
}

export interface Location {
  postal_code: PostalCode;
  address: LocationAddress;
  street_view_url: string;
  city: City;
  street_view_metadata_url: string;
  neighborhoods: null;
  search_areas: SearchArea[];
  county: County;
}

export interface LocationAddress {
  street_post_direction: null;
  street_number: string;
  state: string;
  street_suffix: string;
  state_code: string;
  validation_code: string;
  unit: null;
  postal_code: string;
  street_direction: null;
  street_name: string;
  country: string;
  coordinate: Coordinate;
  line: string;
  city: string;
}

export interface City {
  county_needed_for_uniq: boolean;
  slug_id: string;
}

export interface County {
  name: string;
  state_code: string;
  fips_code: string;
}

export interface PostalCode {
  geo_statistics: GeoStatistics;
}

export interface GeoStatistics {
  housing_market: HousingMarket;
}

export interface HousingMarket {
  hot_market_badge: string;
}

export interface NearbySchools {
  schools: School[];
}

export interface School {
  distance_in_miles: number;
  district: District;
  id: string;
  review_count: number;
  name: string;
  nces_code: string;
  funding_type: string;
  parent_rating: number;
  greatschools_id: string;
  coordinate: Coordinate;
  slug_id: string;
  education_levels: string[];
  student_count: number;
  grades: string[];
  rating: number | null;
}

export interface District {
  name: null | string;
  id: string;
}

export interface OtherListings {
  rdc: RDC[];
}

export interface RDC {
  unique: boolean;
  primary: boolean;
  listing_id: string;
  listing_key: null;
  status: string;
  sold_date: null;
}

export interface PhotoElement {
  title: null;
  description: null;
  tags: Tag[];
  href: string;
  type: Type;
}

export interface Tag {
  label: string;
  probability: number;
}

export enum Type {
  RealtordotcomMlsListingImage = 'realtordotcom_mls_listing_image',
}

export interface Products {
  brand_name: string;
  products: string[];
}

export interface PropertyHistory {
  event_name: string;
  date: Date;
  listing: null;
  price_sqft: number;
  source_name: string;
  source_listing_id: string;
  price: number;
}

export interface DataSource {
  community_id: null;
  id: string;
  name: string;
  agents: Agent[];
  disclaimer: Disclaimer;
  plan_id: null;
  listing_id: string;
  raw: Raw;
  type: string;
}

export interface Agent {
  office_name: null;
  type: string;
  id: string;
  office_phone: null;
  agent_name: string;
  agent_id: string;
  office_id: string;
}

export interface Disclaimer {
  logo: null;
  href: null;
  text: string;
}

export interface Raw {
  tax_amount: number;
  status: string;
  style: string;
}

export interface SuppressionFlags {
  has_suppress_foreclosure: boolean;
  has_suppress_all_offmarket_photos: boolean;
  has_suppress_sold_info: boolean;
}

export interface TaxHistory {
  assessment: Assessment;
  tax: number;
  year: number;
  market: Assessment | null;
}

export interface Assessment {
  building: number;
  total: number;
  land: number;
}

export interface DataVirtualTour {
  type: null;
  href: string;
}

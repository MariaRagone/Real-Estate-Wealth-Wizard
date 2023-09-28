import { Component, Type } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import {
  PropertiesByPostal,
} from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertiesService } from 'src/app/Services/properties.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { MortgageFormService } from 'src/app/Services/mortgage-form.service';
import { User } from 'src/app/Models/user';
import { RentService } from 'src/app/Services/rent.service';
import { Rent } from 'src/app/Models/rent';
import { AverageRateService } from 'src/app/Services/average-rate.service';
import { Observable } from 'rxjs';
import { AverageRate, AverageRateModel } from 'src/app/Models/average-rate';
import { CoordinateModel } from 'src/app/Models/coordinate';

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.css'],
})
export class PropertyListingsComponent {
  PropertyListResult: PropertiesByPostal = {} as PropertiesByPostal;
  postal_code: string = '';
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  FavoriteListResult: Favorite[] = [];
  appUser: User = {} as User;
  vacancyRate: number = 0;
  numBeds: number = 0;
  RentListResult: Rent = {} as Rent;
  rent_prices: number[] = [];
  averageRent: number = 0;
  displaySearchResult: boolean = false;
  managementFee = 0;
  averageRates: AverageRateModel = {} as AverageRateModel;
  status: string = "";
  loading: boolean = false;
  // favorited: boolean = false;
  //appUser: User = {} as User;

  ///map
  WaitAMinute: boolean = false;
  PropertyCoordinates: CoordinateModel[] = [];
 
  constructor(
    private _propertiesService: PropertiesService,
    private _favoriteService: FavoriteService,
    private authService: SocialAuthService,
    private _mortgageFormService: MortgageFormService,
    private _rentService: RentService,
    private _averageRateService: AverageRateService
  ) {}

  //Run the method location based on the IP Run the method location based on the IP address
  ngOnInit(): void {
    
    // this.setupMap();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
   
  }
  //this method runs when form is submitted
  NewMortgage(newUser: User) {
    this.appUser = newUser;
    // console.log(newUser.zipCode);
    // console.log("newMortgageMethod")
    // this.GetRentals(this.appUser.zipCode,this.numBeds);
    // this.GetProperties(this.appUser.zipCode, this.appUser.maxPrice, this.numBeds);

    //temporary method - fix later!
    this.callAPIs(
      this.appUser.zipCode,
      this.appUser.numberOfBedrooms,
      this.appUser.maxPrice,
      this.appUser.numberOfBedrooms
    );
    this.GetAverageRates(this.appUser.zipCode);
    this.displaySearchResult = true;
  }

  async GetRentals(ZipCode: string, Beds: number): Promise<void> {
    this.WaitAMinute = false;
    await this._rentService
      .GetRentByPostal(ZipCode, Beds).subscribe((response: Rent) => {
        console.log(response);
        console.log('Rentals work');
        this.RentListResult = response;
        response.data.home_search.results.forEach((p) => {
          if (p.list_price != null) {
            this.rent_prices.push(p.list_price);
          }
        });
        this.calculateRentIncome(this.rent_prices);
        this.rent_prices = [];
      });
    this.WaitAMinute = true;
  }
  
  //temporary method - fix later!
  callAPIs(ZipCode: string, Beds: number, PriceMax: number, MinBeds: number): void {
    // this.status = "loading";
    this.loading = true;
    if (ZipCode == "" || ZipCode == null) {
      ZipCode = "0";
    }
    if (Beds == null){
      Beds = 0;
    }
    if (PriceMax == null){
      PriceMax = 999999999;
    }
    if (MinBeds == null){
      MinBeds = 0;
    }

    this._rentService.GetRentByPostal(ZipCode, Beds).subscribe((response: Rent) => {
      if (response.data == null){
        this.status = "Could not find any matches. Please try adjusting your search parameters.";
        return;
      }
      console.log(response);
      // console.log("Rentals work");
      this.RentListResult = response;
      response.data.home_search.results.forEach(p => {
        if (p.list_price != null) {
          this.rent_prices.push(p.list_price);
        }
      })
      this.calculateRentIncome(this.rent_prices);
      this.rent_prices = [];
      this._propertiesService.GetAllByPostalCode(ZipCode, PriceMax, MinBeds).subscribe((response: PropertiesByPostal) => {
        this.loading = false;

        console.log(response);
        if (response == null){
          this.status = "Could not find any matches. Please try adjusting your search parameters.";
          return;
        }
  
        this.PropertyCoordinates = this.GePropertyCoordinatess(response);
        this.PropertyListResult = response
        console.log('hi coords')
        console.log(this.PropertyCoordinates)
        this.status = "";
      },(err) => {
        console.log("Could not find any matches");
      });

    },(err) => {
      console.log("Could not find any matches");
      this.status = "Could not find any matches. Please try adjusting your search parameters.";
    });

  }

  //also in favorite-list component
  calculateRentIncome(list_price: number[]): void {
    // Initialize a variable to keep track of the sum of rent prices.
    let sum = 0;
    let averageRent = 0;
    // Loop through the array of rent prices and add each rent price to the sum.
    for (const price of list_price) {
      sum += price;
    }
    // Calculate the average rent price by dividing the sum by the number of rentals.
    if (list_price.length > 0) {
      averageRent = sum / list_price.length;
      console.log(averageRent);
      this.averageRent = averageRent;
    } else {
      // Handle the case where the array is empty to avoid division by zero.
      this.averageRent = 0;
    }
  }

  async GetProperties(ZipCode: string, PriceMax: number, MinBeds: number): Promise<void> {
    await this._propertiesService
      .GetAllByPostalCode(ZipCode, PriceMax, MinBeds)
      .subscribe((response: PropertiesByPostal) => {
        console.log(response);
        this.PropertyCoordinates = this.GePropertyCoordinatess(response);
        this.PropertyListResult = response;
        console.log('hi coords');
        console.log(this.PropertyCoordinates);
      });
  }

  AddFavorites(googleId: string, propertyId: string): void {
    let favorite: Favorite = {} as Favorite;
    // this._eventService.AddFavorite();
    favorite.googleId = googleId;
    favorite.propertyId = propertyId;
    this._favoriteService
      .AddFavorite(favorite)
      .subscribe((response: Favorite) => {
        // console.log(response)
        this.FavoriteListResult.push(response);
      });
  }

  RemoveFavorite(googleId: string, propertyId: string): void {
    let favorite: Favorite = {} as Favorite;
    // this._eventService.AddFavorite();
    favorite.googleId = googleId;
    favorite.propertyId = propertyId;
    this._favoriteService
      .RemoveFavorite(googleId, propertyId)
      .subscribe((response: Favorite) => {
        // console.log(response)
        this.FavoriteListResult.push(response);
      });
  }

  VacancyRate(vacancyRate: number) {
    this.vacancyRate = vacancyRate;
  }

  ManagementFee(managementFee: number) {
    this.managementFee = managementFee;
  }

  NumBeds(numBeds: number) {
    this.numBeds = numBeds;
  }

  GetAverageRates(postal_code: string) {
    this._averageRateService
      .GetAverageRatesByPostal(postal_code)
      .subscribe((response) => {
        console.log(response);
        this.averageRates = response;
      });
  }

  GePropertyCoordinatess(Properties: PropertiesByPostal): CoordinateModel[] {
    let coords: CoordinateModel[] = [];
    let coord: CoordinateModel = {} as CoordinateModel;
    //
    const results = Properties.data.home_search.results;

    for (let i = 0; i < Properties.data.home_search.results.length; i++) {
      const p = Properties.data.home_search.results[i];
      coord = { lat: 55, lon: 55, propertyDetails: p.property_id }; // Default coordinates

      if (
        p.location.address.coordinate?.lat != null &&
        p.location.address.coordinate?.lon != null
      ) {
        coord.lat = Number(p.location.address.coordinate.lat);
        coord.lon = Number(p.location.address.coordinate.lon);
        coord.city=p.location.address.city;
        coord.line=p.location.address.line;
        coord.price=p.list_price;
        let temp:any ='';
        console.log(p.photos)
        if(p.photos?.[0]==null){
          coord.photo='';
        }
        else {
          
          temp=p.photos[0].href;
          coord.photo=temp;
          console.log(temp)
        }
        
       
      }

      coords.push(coord);
    }

    return coords;
  }


}

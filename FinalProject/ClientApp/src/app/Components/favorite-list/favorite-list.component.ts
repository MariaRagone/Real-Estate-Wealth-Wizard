import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, Input } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { CoordinateModel } from 'src/app/Models/coordinate';
import { PropertyDetails } from 'src/app/Models/property-details';
import { User } from 'src/app/Models/user';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';
import { AverageRateModel } from 'src/app/Models/average-rate';
import { Result } from 'src/app/Models/properties-by-postal';
import { TransferngService } from 'src/app/Services/transferng.service';
import { UserService } from 'src/app/Services/user.service';
import { RentService } from 'src/app/Services/rent.service';
import { RentProperty } from 'src/app/Models/rent-property';
import { Rent } from 'src/app/Models/rent';
import { AverageRateZipcode } from 'src/app/Models/average-rate-zipcode';
import { AverageRateService } from 'src/app/Services/average-rate.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent {


  displayLastCriteria: boolean = false;
  @Input() DisplayFavorite: User = {} as User;
  FavoriteListResult: Favorite[] = [];
  UserResult: User = {} as User;
  favoriteProperties: PropertyDetails[] = [];
  user: SocialUser = {} as SocialUser;
  PropertyCoordinates: CoordinateModel[] = [];
  favorited: boolean = false;
  rentPropertyList: RentProperty[] = [];
  averageRateList: AverageRateZipcode[] = [];

  constructor(
    private _favoriteService: FavoriteService,
    private _propertyDetailsService: PropertyDetailsService,
    private _authService: SocialAuthService,
    //This is for mortgageform and result
    private _transfererng: TransferngService,
    private _userService: UserService,
    private _rentService: RentService,
    private _averageRateService: AverageRateService
  ) { }

  ngOnInit(): void {
    this._authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      // this.loggedIn = this.user != null;
      this.DisplayFavorites(this.user.id);
      this.getUserSearches();
    });
  }
  ConvertDetailsToResult(input: PropertyDetails): Result {
    let result: Result = {} as Result
    result.list_price = input.data.list_price;
    return result
  }


  toggleDisplay(): void {
    this.displayLastCriteria = !this.displayLastCriteria;
  }
  DisplayFavorites(googleId: string): void {
    this._favoriteService
      .GetFavorites(googleId)
      .subscribe((response: Favorite[]) => {
        // console.log(response);
        this.FavoriteListResult = response;
        this.GetPropDetails();
      });
  }

  GetPropDetails(): void {
    this.FavoriteListResult.forEach((f: Favorite) => {
      this._propertyDetailsService
        .GetPropertyDetails(f.propertyId)
        .subscribe((response: PropertyDetails) => {
          this.favoriteProperties.push(response);
          this.getRentByProperty(response);
          // console.log(response);
          this.PropertyCoordinates = this.GetCoordinates();
        });

    });
  }



  DeleteFavorite(googleId: string, propertyId: string): void {
    this.favorited = false;
    //feedback for user
    let target: number = this.favoriteProperties.findIndex((f) => f.data.property_id == propertyId);
    this.favoriteProperties.splice(target, 1);
    this.FavoriteListResult.splice(target, 1);

    this._favoriteService.RemoveFavorite(googleId, propertyId).subscribe((response: Favorite) => {
      // console.log(response);
    });
  }

  //we still need this method
  GetCoordinates(): CoordinateModel[] {
    let cords: CoordinateModel[] = [];
    this.favoriteProperties.forEach((p) => {
      if (p.data.location.address.coordinate.lat != null) {

        let lat = (Number(p.data.location.address.coordinate.lat));
        let lon = (Number(p.data.location.address.coordinate.lon));
        let coord: CoordinateModel = {} as CoordinateModel;
        coord.propertyDetails = p.data.property_id;
        coord.photo = p.data.photos[0].href;
        coord.price = p.data.list_price;
        coord.city = p.data.location.address.city;
        coord.line = p.data.location.address.line;
        coord.lat = lat;
        coord.lon = lon;
        cords.push(coord);
      }
      // console.log(`Coordinates = ${cords}`);
      // console.log(cords)
    })
    // console.log(this.coordinates)

    return cords;
  }

  getUserSearches(): void {
    this._userService.getByGoogleId(this.user.id).subscribe((response) => {
      // console.log(response);
      this.UserResult = response;
    })
  }

  async getRentByProperty(p: PropertyDetails): Promise<void> {
    let beds = 0;
    if (p.data.description.beds != null) {
      beds = p.data.description.beds;
    }
    else if (p.data.description.beds_min != null) {
      beds = p.data.description.beds_min;
    }
    else if (p.data.description.beds_max != null) {
      beds = p.data.description.beds_max;
    }
    else {
      beds = 1;
    }
    //let rent_price:number[] = [];
    await this.delay(1000)
    await this._rentService.GetRentByPostal(p.data.location.address.postal_code, beds).subscribe((response: Rent) => {
      console.log(response);
      let rent_price: number[] = [];
      response.data.home_search.results.forEach((p) => {
        if (p.list_price != null) {
          rent_price.push(p.list_price);
        }

      });
      let result: RentProperty = {
        rent: this.calculateRentIncome(rent_price),
        propertyId: p.data.property_id
      }
      this.rentPropertyList.push(result);
    });
    //return this.calculateRentIncome(rent_price);
    await this.delay(1000)
    this.GetAverageRates(p.data.location.address.postal_code, p.data.property_id);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  //also in property-listings component
  calculateRentIncome(list_price: number[]): number {
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
      // console.log(averageRent);
      return averageRent;
    } else {
      // Handle the case where the array is empty to avoid division by zero.
      return 0;
    }

  }

  GetAverageRates(postal_code: string, pID: string) {
    this._averageRateService
      .GetAverageRatesByPostal(postal_code)
      .subscribe((response) => {
        console.log(response);
        let result: AverageRateZipcode = {
          propertyId: pID,
          rate: response
        };
        this.averageRateList.push(result);
      });
  }

  getRentFromList(pId: string): number {
    return Number(this.rentPropertyList.find(p => pId == p.propertyId)?.rent);
  }

  getAverageRateFromList(pId: string): AverageRateModel {
    return this.averageRateList.find(p => pId == p.propertyId)?.rate as AverageRateModel;
  }

  isPrepared(pId: string) {
    let x: number = this.rentPropertyList.findIndex(p => pId == p.propertyId);
    let y: number = this.averageRateList.findIndex(p => pId == p.propertyId);
    if (x != -1 && y != -1) {
      return true;
    }
    else {
      return false;
    }
  }
}

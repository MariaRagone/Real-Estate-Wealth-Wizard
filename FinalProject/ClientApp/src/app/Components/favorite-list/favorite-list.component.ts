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

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent {




  //This is the beginning of mortgage form and result code
  // o:Result= {} as Result;
  // appUser: User = this._transfererng.appUser;
  averageRent: number = this._transfererng.averageRent;
  vacancyRate: number = this._transfererng.vacancyRate;
  managementFee: any = this._transfererng.managementFee;
  averageRates: AverageRateModel = this._transfererng.averageRates;
  
  ConvertDetailsToResult(input:PropertyDetails):Result{
    let result:Result= {}as Result
    result.list_price=input.data.list_price;
    

    return result
  }
  appUser():User{
    this.UpDatePropertyListingsVariables();
    ;
    return this._transfererng.appUser;
  }
  _averageRent():Number{
    return this._transfererng.averageRent;
  }
  _vacancyRate():Number{
    return this._transfererng.vacancyRate;
  }
  _managementFee():Number{
    return this._transfererng.managementFee;
  }
  _averageRates():AverageRateModel{
    return this._transfererng.averageRates;
  }


  NewMortgage(newUser: User){
    this._transfererng.NewMortgage(newUser);
    // this.UpDatePropertyListingsVariables();
  }
  VacancyRate(vacancyRate: number){
    this._transfererng.VacancyRate(vacancyRate);
    // this.UpDatePropertyListingsVariables();
  }
  NumBeds(numBeds: number){
    this._transfererng.VacancyRate(numBeds);
    // this.UpDatePropertyListingsVariables();
  }
  ManagementFee(managementFee: number){
    this._transfererng.ManagementFee(managementFee);
    // this.UpDatePropertyListingsVariables();
  }

  UpDatePropertyListingsVariables():void{
  //   this.appUser = this._transfererng.appUser;
    this.averageRent = this._transfererng.averageRent;
    this.vacancyRate = this._transfererng.vacancyRate;
    this.managementFee = this._transfererng.averageRates;
    this.averageRates = this._transfererng.averageRates; 
  }
  ///
  //This is end of mortgage form and result code

  @Input() DisplayFavorite: User = {} as User;
  FavoriteListResult: Favorite[] = [];
  UserListResult: User[] = [];
  favoriteProperties: PropertyDetails[] = [];
  user: SocialUser = {} as SocialUser;
  PropertyCoordinates: CoordinateModel[] = [];
  favorited: boolean = false;

  constructor(
    private _favoriteService: FavoriteService,
    private _propertyDetailsService: PropertyDetailsService,
    private _authService: SocialAuthService,
    private _transfererng: TransferngService //This is for mortgageform and result
  ) {}

  ngOnInit(): void {
    this._authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
      // this.loggedIn = this.user != null;
      this.DisplayFavorites(this.user.id);
    });
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
          console.log(response);
          this.PropertyCoordinates = this.GetCoordinates();
        });
        
    });
  }

  

  DeleteFavorite(googleId: string, propertyId: string): void {
    this.favorited = false;
    //feedback for user
    let target: number = this.favoriteProperties.findIndex((f) => f.data.property_id == propertyId);
    this.favoriteProperties.splice(target, 1);

    this._favoriteService.RemoveFavorite(googleId, propertyId).subscribe((response: Favorite) => {
      console.log(response);
    });
  }

  //we still need this method
  GetCoordinates(): CoordinateModel[] {
    // console.log('Get Coordinates')
    // console.log(this.favoritePins);
    let cords: CoordinateModel[] = [];
    this.favoriteProperties.forEach((p) => {
      if (p.data.location.address.coordinate.lat != null) {
        
        let lat = (Number(p.data.location.address.coordinate.lat));
        let lon = (Number(p.data.location.address.coordinate.lon));
        let coord: CoordinateModel = {} as CoordinateModel;
        coord.propertyDetails=p.data.property_id;
        coord.photo = p.data.photos[0].href;
        coord.price=p.data.list_price;
        coord.city=p.data.location.address.city;
        coord.line=p.data.location.address.line;
        coord.lat = lat;
        coord.lon = lon;
        cords.push(coord);
      }
      console.log(`Coordinates = ${cords}`);
      console.log(cords)
    })
    // console.log(this.coordinates)
    
    return cords;
  }
}

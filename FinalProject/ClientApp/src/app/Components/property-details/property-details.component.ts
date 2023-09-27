import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { AverageRateModel } from 'src/app/Models/average-rate';
import { Favorite } from 'src/app/Models/favorite';
import { Result } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertiesService } from 'src/app/Services/properties.service';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';
import { TransferngService } from 'src/app/Services/transferng.service';
import { User } from 'src/app/Models/user';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent {

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












  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;
  PropertyDetailsResult: PropertyDetails = {} as PropertyDetails;  //From Class to typescript 
  propertyId: string = '';
  FavoriteListResult: Favorite[] = [];
  currentGoogleId: string = 'test dummy';
  selectedPropertyId: string = '1';
  user: SocialUser = {} as SocialUser;
  Lat:number=0;
  Lon:number=0;
  activeIndex:number = 0;
  favorited: boolean = false;

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }
  constructor(
    private _propertyDetailsService: PropertyDetailsService,
    private _favoriteService: FavoriteService,
    private _authService: SocialAuthService,
    private route: ActivatedRoute, // Inject ActivatedRoute
    private _transfererng: TransferngService //This is for mortgageform and result
  ) {}




ngOnInit(): void {

  this.route.params.subscribe((params) => {
    this.propertyId = params['propertyId'];



    this._propertyDetailsService
      .GetPropertyDetails(this.propertyId)
      .subscribe((response: PropertyDetails) => {
        // console.log(response);
        this.PropertyDetailsResult = response;
        this.setupMap();
        this.GetUser();
        // this.selectedPropertyId=response.data.property_id;
        // this.currentGoogleId=this.user.id;
      });
  });
}

//adjusts photo carousel
  adjustIndex(amount:number):void{
    this.activeIndex += amount;
    //if index too small
    if(this.activeIndex <= -1){
      this.activeIndex = this.PropertyDetailsResult.data.photos.length - 1;
    }
    //if index too big
    if(this.activeIndex >= this.PropertyDetailsResult.data.photos.length){
      this.activeIndex = 0;
    }
  }

GetUser(): void {
  this._authService.authState.subscribe((user: SocialUser) => {
    this.user = user;
    // this.loggedIn = this.user != null;
  });
}

  AddFavorites(googleId:string,propertId:string): void {
    this.favorited = true;
    let favorite: Favorite = {} as Favorite;
    // this._eventService.AddFavorite();
    favorite.googleId = googleId;
    favorite.propertyId = propertId;
    this._favoriteService
      .AddFavorite(favorite)
      .subscribe((response: Favorite) => {
        console.log(response);
        this.FavoriteListResult.push(response);
      });
  }

  DeleteFavorite(googleId: string, propertyId: string): void {
    this.favorited = false;
    //feedback for user
    // let target: number = this.favoriteProperties.findIndex((f) => f.data.property_id == propertyId);
    // this.favoriteProperties.splice(target, 1);

    this._favoriteService.RemoveFavorite(googleId, propertyId).subscribe((response: Favorite) => {
      console.log(response);
    });
  }
  

////////////
Click(){
  console.log("mapClicked")
}


display: any;
  center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
zoom = 10;

setupMap():void {
  this.Lat=Number(this.PropertyDetailsResult.data.location.address.coordinate.lat);
  this.Lon=Number(this.PropertyDetailsResult.data.location.address.coordinate.lon);

this.center = {
  lat: this.Lat,
  lng: this.Lon
};
}

/*------------------------------------------
--------------------------------------------
moveMap()
--------------------------------------------
--------------------------------------------*/
moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}

/*------------------------------------------
--------------------------------------------
move()
--------------------------------------------
--------------------------------------------*/
move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
}



}






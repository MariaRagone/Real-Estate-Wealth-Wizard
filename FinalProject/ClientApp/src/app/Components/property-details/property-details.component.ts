import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Favorite } from 'src/app/Models/favorite';
import { PropertyDetails } from 'src/app/Models/property-details';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertiesService } from 'src/app/Services/properties.service';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css'],
})
export class PropertyDetailsComponent {
  PropertyDetailsResult: PropertyDetails = {} as PropertyDetails;  //From Class to typescript 
  propertyId: string = '';
  FavoriteListResult: Favorite[] = [];
  currentGoogleId: string = 'test dummy';
  selectedPropertyId: string = '1';
  user: SocialUser = {} as SocialUser;
  Lat:number=0;
  Lon:number=0;

  constructor(
    private _propertyDetailsService: PropertyDetailsService,
    private _favoriteService: FavoriteService,
    private _authService: SocialAuthService,
    private route: ActivatedRoute // Inject ActivatedRoute
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



GetUser(): void {
  this._authService.authState.subscribe((user: SocialUser) => {
    this.user = user;
    // this.loggedIn = this.user != null;
  });
}

  AddFavorites(googleId:string,propertId:string): void {
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






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
  PropertyDetailsResult: PropertyDetails = {} as PropertyDetails;
  propertyId: string = '';
  FavoriteListResult: Favorite[] = [];
  currentGoogleId: string = 'test dummy';
  selectedPropertyId: string = '1';
  user: SocialUser = {} as SocialUser;

  constructor(
    private _propertyDetailsService: PropertyDetailsService,
    private _favoriteService: FavoriteService,
    private _authService: SocialAuthService,
    private route: ActivatedRoute // Inject ActivatedRoute
  ) {}


//   ngOnInit(): void {
//     this._authService.authState.subscribe((user: SocialUser) => {
//       this.user = user;
//       // this.loggedIn = this.user != null;
//       this._propertyDetailsService
//       .GetPropertyDetails(this.selectedPropertyId)
//       .subscribe((response: PropertyDetails) => {
//         // console.log(response);
//         this.PropertyDetailsResult = response;
//     });
//   });
// }

ngOnInit(): void {

  this.route.params.subscribe((params) => {
    this.propertyId = params['propertyId'];



    this._propertyDetailsService
      .GetPropertyDetails(this.propertyId)
      .subscribe((response: PropertyDetails) => {
        // console.log(response);
        this.PropertyDetailsResult = response;
        this.GetUser();
      });
  });
}



GetUser(): void {
  this._authService.authState.subscribe((user: SocialUser) => {
    this.user = user;
    // this.loggedIn = this.user != null;
  });
}

  AddFavorites(): void {
    let favorite: Favorite = {} as Favorite;
    // this._eventService.AddFavorite();
    favorite.googleId = this.currentGoogleId;
    favorite.propertyId = this.selectedPropertyId;
    this._favoriteService
      .AddFavorite(favorite)
      .subscribe((response: Favorite) => {
        console.log(response);
        this.FavoriteListResult.push(response);
      });
  }
}

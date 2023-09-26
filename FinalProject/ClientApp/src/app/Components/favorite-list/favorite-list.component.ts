import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, Input } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { Coordinate } from 'src/app/Models/coordinate';
import {  PropertyDetails } from 'src/app/Models/property-details';
import { User } from 'src/app/Models/user';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css'],
})
export class FavoriteListComponent {
  @Input() DisplayFavorite: User = {} as User;
  FavoriteListResult: Favorite[] = [];
  UserListResult: User[] = [];
  favoriteProperties: PropertyDetails[] = [];
  user: SocialUser = {} as SocialUser;
  PropertyCoordinates: Coordinate[] = [];

  constructor(
    private _favoriteService: FavoriteService,
    private _propertyDetailsService: PropertyDetailsService,
    private _authService: SocialAuthService
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
    //feedback for user
    let target: number = this.favoriteProperties.findIndex((f) => f.data.property_id == propertyId);
    this.favoriteProperties.splice(target, 1);

    this._favoriteService.RemoveFavorite(googleId, propertyId).subscribe((response: Favorite) => {
      console.log(response);
    });
  }

  //we still need this method
  GetCoordinates(): Coordinate[] {
    // console.log('Get Coordinates')
    // console.log(this.favoritePins);
    let cords: Coordinate[] = [];
    this.favoriteProperties.forEach((p) => {
      if (p.data.location.address.coordinate.lat != null) {
        
        let lat = (Number(p.data.location.address.coordinate.lat));
        let lon = (Number(p.data.location.address.coordinate.lon));
        let coord: Coordinate = {} as Coordinate;
        coord.propertyDetails=p.data.property_id;
        coord.photo = p.data.photos[0].href;
        console.log('photo')
        console.log(coord.photo)
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

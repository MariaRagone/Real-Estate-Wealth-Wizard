import { Component } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertiesService } from 'src/app/Services/properties.service';

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.css'],
})
export class PropertyListingsComponent {
  PropertyListResult: PropertiesByPostal = {} as PropertiesByPostal;
  postal_code:string = "";

  currentGoogleId: string = "";
  selectedPropertyId: string = "";

  FavoriteListResult: Favorite[] = [];

  constructor(private _propertiesService: PropertiesService, private _favoriteService: FavoriteService) {}

  ngOnInit():void{
    this._propertiesService.GetAllByPostalCode("48420").subscribe((response:PropertiesByPostal)=> {
      console.log(response);
      this.PropertyListResult = response;
  });
}

AddFavorites():void{
  let favorite:Favorite = {} as Favorite;
  // this._eventService.AddFavorite();
  favorite.googleId = this.currentGoogleId;
  favorite.propertyId = this.selectedPropertyId;
  this._favoriteService.AddFavorite(favorite).subscribe((response:Favorite) =>{
    console.log(response)
    this.FavoriteListResult.push(response);
  });
}

}

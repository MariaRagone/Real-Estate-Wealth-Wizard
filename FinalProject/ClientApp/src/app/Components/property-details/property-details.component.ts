import { Component } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { PropertyDetails } from 'src/app/Models/property-details';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertiesService } from 'src/app/Services/properties.service';
import { PropertyDetailsService } from 'src/app/Services/property-details.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {

  PropertyDetailsResult: PropertyDetails = {} as PropertyDetails;
  propertyId:string = "";
  FavoriteListResult: Favorite[] = [];
  currentGoogleId: string = "test dummy";
  selectedPropertyId: string = "1";



  constructor(private _propertyDetailsService: PropertyDetailsService, private _favoriteService: FavoriteService) {}

  ngOnInit():void{
    this._propertyDetailsService.GetPropertyDetails("4390128585").subscribe((response:PropertyDetails)=> {
      // console.log(response);
      this.PropertyDetailsResult = response;
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
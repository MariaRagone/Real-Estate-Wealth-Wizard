import { Component } from '@angular/core';
import { PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertiesService } from 'src/app/Services/properties.service';

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.css'],
})
export class PropertyListingsComponent {
  PropertyListResult: PropertiesByPostal = {} as PropertiesByPostal;
  postal_code:string = "";

  constructor(private _propertiesService: PropertiesService) {}

  ngOnInit():void{
    this._propertiesService.GetAllByPostalCode("48420").subscribe((response:PropertiesByPostal)=> {
      console.log(response);
      this.PropertyListResult = response;
  });
}
}

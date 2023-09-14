import { Component } from '@angular/core';
import { PropertyDetails } from 'src/app/Models/property-details';
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

  constructor(private _propertyDetailsService: PropertyDetailsService) {}

  ngOnInit():void{
    this._propertyDetailsService.GetPropertyDetails("4390128585").subscribe((response:PropertyDetails)=> {
      console.log(response);
      this.PropertyDetailsResult = response;
  });
}
}
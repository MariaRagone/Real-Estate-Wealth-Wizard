import { Component } from '@angular/core';
import { PropertyDetails } from 'src/app/Models/property-details';
import { PropertiesService } from 'src/app/Services/properties.service';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent {

  PropertyDetailsResult: PropertyDetails = {} as PropertyDetails;
  propertyId:string = "";

  constructor(private _propertiesService: PropertiesService) {}

  ngOnInit():void{
    this._propertiesService.GetPropertyDetails("4390128585").subscribe((response:PropertyDetails)=> {
      console.log(response);
      this.PropertyDetailsResult = response;
  });
}
}
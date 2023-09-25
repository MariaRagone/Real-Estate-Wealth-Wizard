import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { PropertyDetails } from '../Models/property-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailsService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { } 
  // API/s called here (see proxy.config)

  /// Details
  GetPropertyDetails(propertyId:string):Observable<PropertyDetails>
  {
    return this.http.get<PropertyDetails>(`${this.baseUrl}api/PropertyDetails/${propertyId}`);
  }
  //calls ApI via httpget Method
}

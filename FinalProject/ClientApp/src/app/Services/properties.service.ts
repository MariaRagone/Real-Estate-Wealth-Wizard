import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertiesByPostal } from '../Models/properties-by-postal';
import { PropertyDetails } from '../Models/property-details';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }



  GetAllByPostalCode(postal_code:string):Observable<PropertiesByPostal>{
    return this.http.get<PropertiesByPostal>(`${this.baseUrl}api/PropertiesByPostal/${postal_code}`); //postal_code???
  }

  GetPropertyDetails(propertyId:string):Observable<PropertyDetails>{
    return this.http.get<PropertyDetails>(`${this.baseUrl}api/PropertyDetails/${propertyId}`);

}
}

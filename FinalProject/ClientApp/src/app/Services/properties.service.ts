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


  /// Postal
  GetAllByPostalCode(postal_code:string):Observable<PropertiesByPostal>{
    return this.http.get<PropertiesByPostal>(`${this.baseUrl}api/PropertiesByPostal/${postal_code}`); //postal_code???
  }
  /// Details
  GetPropertyDetails(propertyId:string):Observable<PropertyDetails>
  {
    return this.http.get<PropertyDetails>(`${this.baseUrl}api/PropertyDetails/${propertyId}`);
  }
  /// MortgageCalculator
  GetMortgageDetails(showAmortization:boolean, hoaFees:number,percentTaxRate:number, yearTerm:number, percentRate:number, downPayment:number, monthlyHomeInsurance:number, price:number):Observable<PropertyDetails>
  {
    return this.http.get<PropertyDetails>(`${this.baseUrl}api/MortgageCalculator/${showAmortization}/${hoaFees}/${percentTaxRate}/${yearTerm}/${percentRate}/${downPayment}/${monthlyHomeInsurance}/${price}`);
}
}

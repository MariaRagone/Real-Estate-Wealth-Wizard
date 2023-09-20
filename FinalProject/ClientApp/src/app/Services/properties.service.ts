import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertiesByPostal } from '../Models/properties-by-postal';
import { PropertyDetails } from '../Models/property-details';
import { MortgageCalculatorModel } from '../Models/mortgage-calculator';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }


  /// Postal
  GetAllByPostalCode(postal_code:string, price_Max:number, min_beds:number):Observable<PropertiesByPostal>{
    return this.http.get<PropertiesByPostal>(`${this.baseUrl}api/PropertiesByPostal/${postal_code}?price_Max=${price_Max}&min_Beds=${min_beds}`); //postal_code???
  }
}

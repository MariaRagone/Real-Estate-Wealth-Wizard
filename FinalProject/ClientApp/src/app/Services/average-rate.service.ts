import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AverageRate, AverageRateModel } from '../Models/average-rate';

@Injectable({
  providedIn: 'root'
})
export class AverageRateService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetAverageRatesByPostal(postal_code:string):Observable<AverageRateModel>{
    
    return this.http.get<AverageRateModel>(`${this.baseUrl}api/AverageRate/${postal_code}`); 
  }
}

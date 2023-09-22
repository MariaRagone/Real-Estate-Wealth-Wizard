import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AverageRate } from '../Models/average-rate';

@Injectable({
  providedIn: 'root'
})
export class AverageRateService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetAverageRatesByPostal(postal_code:string):Observable<AverageRate>{
    
    return this.http.get<AverageRate>(`${this.baseUrl}api/AverageRate/${postal_code}`); 
  }
}

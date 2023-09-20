import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rent } from '../Models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetRentByPostal(postal_code:string, beds:number):Observable<Rent>{
    return this.http.get<Rent>(`${this.baseUrl}api/Rent/${postal_code}?beds=${beds}`); //postal_code???
  }

}

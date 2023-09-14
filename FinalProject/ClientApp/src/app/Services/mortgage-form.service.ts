import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MortgageCalculatorModel } from '../Models/mortgage-calculator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MortgageFormService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }
  
  /// MortgageCalculator
  GetMortgageDetails(showAmortization:boolean, hoaFees:number,percentTaxRate:number, yearTerm:number, percentRate:number, downPayment:number, monthlyHomeInsurance:number, price:number):Observable<MortgageCalculatorModel>
  {
    return this.http.get<MortgageCalculatorModel>(`${this.baseUrl}api/MortgageCalculator/${showAmortization}/${hoaFees}/${percentTaxRate}/${yearTerm}/${percentRate}/${downPayment}/${monthlyHomeInsurance}/${price}`);
}
}

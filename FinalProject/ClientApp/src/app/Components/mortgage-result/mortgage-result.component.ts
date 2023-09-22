import { Component, Input } from '@angular/core';
import { AverageRate, AverageRateModel } from 'src/app/Models/average-rate';
import { PropertiesByPostal, Result } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { Rent } from 'src/app/Models/rent';
import { User } from 'src/app/Models/user';
import { RentService } from 'src/app/Services/rent.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-mortgage-result',
  templateUrl: './mortgage-result.component.html',
  styleUrls: ['./mortgage-result.component.css']
})
export class MortgageResultComponent {
  @Input() DisplayResult:Result = {} as Result;
  // @Input() downPayment:number = {} as number; don't need this
  // @Input() closingCost:number = {} as number; don't need this
  @Input() User:User = {} as User;
  // @Input() appUser:User = {} as User; don't need this
  loanAmount:number=0;
  // user:User = {} as User; don't need this
  @Input() Rent:number = {} as number;
  @Input() searchResult:boolean = {} as boolean;
  @Input() vacancyRate:number = {} as number;
  @Input() managementFee:number = {} as number;
  @Input() propertyDetails:PropertyDetails = {} as PropertyDetails;
  @Input() AverageRates:AverageRateModel = {} as AverageRateModel;
  // @Input() maintenanceCosts: number = {} as number;
  constructor() {}

  monthlyMortgagePayment:number = 0;
  insuranceCost:number = 0;
  // monthlyIncome:number = 0;
  monthlyVacancyCost:number = 0;
  monthlyManagementyCost:number = 0;
  numBeds:number = 0;
  closing:number = 0;
  cashFlow:number = 0;
  maintenanceCosts:number = 0;
  monthlyTaxes:number = 0;
  hoaFeesMonthly:number = 0;
 
  

  // RentListResult: Rent = {} as Rent;
//closingCostPercent:number = 0;
 
  ngOnInit():void {
    this.loanAmount = this.calculateLoanAmount();
    this.closing = this.calculateClosingCost();
    this.monthlyMortgagePayment = this.calculateMonthlyMortgagePaymnet();
    this.insuranceCost = this.calculateInsurance();
    this.monthlyVacancyCost = this.calculateVacancy();
    this.cashFlow = this.calculateCashFlow();
    this.managementFee = this.calculateManagementFee();
    this.maintenanceCosts = this.calculateMaintenanceCosts();
    this.monthlyTaxes = this.calculateMonthlyTaxes();
    
    //this.GetRentals(this.User.zipCode, this.numBeds);
  }

  // GetRentals(ZipCode:string, BedsMin:number):void{
  //   this._rentService.GetRentByPostal(ZipCode, BedsMin).subscribe((response:Rent)=> {
  //     console.log(response);
  //     this.RentListResult = response
  //   });
  // }
  // calculateRentIncome():number
  
  calculateLoanAmount():number{
    let result:number = 0;
    result = this.DisplayResult.list_price * (this.User.downPayment * .01);
    let amount:number = this.DisplayResult.list_price - result;
    return amount;
  }

  calculateClosingCost():number{
    let closing:number = 0;
    closing = this.DisplayResult.list_price * (this.User.closingCost * .01);
    return closing;

  }

  calculateMonthlyMortgagePaymnet():number{
      let mortgagePayment: number = 0; 
      let monthlyInterestRate: number = this.User.interestRate / 12 / 100; // Convert annual rate to monthly decimal
      let n: number = this.User.loanTerm * 12;
      mortgagePayment = this.loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, n)) /
                       (Math.pow(1 + monthlyInterestRate, n) - 1);
      
      return mortgagePayment;
  }

  calculateInsurance():number{
    let insuranceCost:number = 0;
    insuranceCost = (this.DisplayResult.list_price * 0.005) / 12;
    return insuranceCost;
  }

  calculateVacancy():number{
    let vacancyRate:number = this.Rent * this.vacancyRate * .01;
    //vacancy = this.monthlyIncome * this.vacancyRate;
    return vacancyRate;
  }

  calculateManagementFee():number{
    let managementFee:number = this.Rent * this.managementFee * .01;
    //vacancy = this.monthlyIncome * this.vacancyRate;
    return managementFee;
  }

  calculateMaintenanceCosts():number{
    let maintenanceCosts:number = 0;
    maintenanceCosts = (this.DisplayResult.list_price * 0.005) / 12;
    return maintenanceCosts;
  }

  calculateMonthlyTaxes():number{
    let monthlyTaxes:number = 0;
    monthlyTaxes = ((Number(this.AverageRates.data.mortgage_data.property_tax)) * this.DisplayResult.list_price) / 12;
    return monthlyTaxes;
  }

  calculateCashFlow():number{
    // let monthlyCosts = this.monthlyMortgagePayment + this.closing + this.insuranceCost + this.vacancyRate;
    let monthlyCosts = this.calculateMonthlyMortgagePaymnet() + (this.insuranceCost + this.monthlyVacancyCost + this.managementFee + this.maintenanceCosts + this.monthlyTaxes);
    let cashFlow = this.Rent - monthlyCosts;
    console.log(cashFlow);
    console.log(`${this.Rent} - ${monthlyCosts}`);
    return cashFlow;
  }

 }
  




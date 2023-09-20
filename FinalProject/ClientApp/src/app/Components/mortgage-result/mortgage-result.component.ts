import { Component, Input } from '@angular/core';
import { PropertiesByPostal, Result } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { User } from 'src/app/Models/user';
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
  constructor(private _userService:UserService) {}
  monthlyMortgagePayment:number = 0;
  insuranceCost:number = 0;
  monthlyIncome:number = 0;
  vacancyRate:number = 0;
  //closingCostPercent:number = 0;
 
  ngOnInit():void {
    this.loanAmount = this.calculateLoanAmount();
    this.User.closingCost = this.calculateClosingCost();
    this.monthlyMortgagePayment = this.calculateMonthlyMortgagePaymnet();
    this.insuranceCost = this.calculateInsurance();
  }

  // NewMortgage(newUser:User){
  //   this.user = newUser;
  //   this.downPament = this.user.downPayment;
  //   this.loneAmont=this.calculateLoanAmount(this.DisplayResult,this.downPament)
  //   // this._userService.SubmitMortgage(newUser).subscribe((response: User) =>{
  //   //   console.log(response);
  //   //   this.MortgageCalcResult.push(response);
  //   // });
  // }

  calculateLoanAmount():number{
    let result:number = 0;
    result = this.DisplayResult.list_price * (this.User.downPayment * .01);
    let amount:number = this.DisplayResult.list_price - result;
    return amount;
  }

  calculateClosingCost():number{
    let closing:number = 0;
    closing = this.DisplayResult.list_price * (this.User.closingCost * 0.01);
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

  //we need to calculate monthly income in order for this method to work
  calculateVacancy():number{
    let vacancy:number = this.monthlyIncome * this.vacancyRate;
    //vacancy = this.monthlyIncome * this.vacancyRate;
    return vacancy;
  }

 }
  




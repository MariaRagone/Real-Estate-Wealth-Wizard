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
  @Input() downPayment:number = {} as number;
  @Input() closingCost:number = {} as number;
  @Input() User:User = {} as User;
  loanAmount:number=0;
  user:User = {} as User;
  constructor(private _userService:UserService) {}
  monthlyMortgagePayment:number = 0;
  //closingCostPercent:number = 0;
 
  ngOnInit():void {
    this.loanAmount = this.calculateLoanAmount();
    this.closingCost = this.calculateClosingCost();
    this.monthlyMortgagePayment = this.calculateMonthlyMortgagePaymnet();
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
    result = this.DisplayResult.list_price * (this.downPayment * .01);
    let amount:number = this.DisplayResult.list_price - result;
    return amount;
  }

  calculateClosingCost():number{
    let closing:number = 0;
    closing = this.DisplayResult.list_price * (this.closingCost * 0.01);
    return closing;

  }

  calculateMonthlyMortgagePaymnet():number{
    let mortgagePayment: number = 0;
    let monthlyInterestRate:number = this.User.interestRate / 12;
    let n:number = this.User.loanTerm * 12;
    mortgagePayment = this.loanAmount * (monthlyInterestRate * (1+monthlyInterestRate))/((Math.pow(1+monthlyInterestRate, n) - 1));
    return mortgagePayment;
  }
  


}

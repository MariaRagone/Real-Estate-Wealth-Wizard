import { Component, EventEmitter, Output } from '@angular/core';
import { MortgageCalculatorModel } from 'src/app/Models/mortgage-calculator';
import { User } from 'src/app/Models/user';
import { MortgageFormService } from 'src/app/Services/mortgage-form.service';
import { PropertiesService } from 'src/app/Services/properties.service';

@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.css']
})
export class MortgageFormComponent {

  MortgageCalcResult: MortgageCalculatorModel = {} as MortgageCalculatorModel;
  propertyId:string = "";
  @Output() MortgageCreated = new EventEmitter<User>();

  showAmortization:boolean=true;
  hoaFees:number=0;
  percentTaxRate:number=.511;
  yearTerm:number=30;
  percentRate:number=3.08;
  downPayment:number=239800;
  monthlyHomeInsurance:number=416;
  price:number=1300000;

  constructor(private _mortgageCalculatorService: MortgageFormService) {}

  newMortgage:User = {} as User;

  ngOnInit():void{
    this._mortgageCalculatorService.GetMortgageDetails(this.showAmortization, this.hoaFees, this.percentTaxRate, this.yearTerm, this.percentRate, this.downPayment, this.monthlyHomeInsurance, this.price).subscribe((response:MortgageCalculatorModel)=> {
      console.log(response);
      this.MortgageCalcResult = response;
  })
}

  submitMortgage():void{
    this.newMortgage.downPayment = 0;
    this.newMortgage.loanTerm = 0;
    this.newMortgage.interestRate = 0;
    if(this.newMortgage.loan == null){
      this.newMortgage.loan = false;
    }
    this.newMortgage.zipCode = "";
    this.MortgageCreated.emit(this.newMortgage);
    this.newMortgage={} as User
    
  }
}


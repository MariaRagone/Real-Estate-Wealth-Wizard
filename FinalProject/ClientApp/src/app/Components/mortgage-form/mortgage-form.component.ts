import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, EventEmitter, Output } from '@angular/core';
import { MortgageCalculatorModel } from 'src/app/Models/mortgage-calculator';
import { User } from 'src/app/Models/user';
import { MortgageFormService } from 'src/app/Services/mortgage-form.service';
import { PropertiesService } from 'src/app/Services/properties.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-mortgage-form',
  templateUrl: './mortgage-form.component.html',
  styleUrls: ['./mortgage-form.component.css'],
})
export class MortgageFormComponent {
  MortgageCalcResult: MortgageCalculatorModel = {} as MortgageCalculatorModel;
  userListResult:User = {} as User;
  propertyId: string = '';
  @Output() MortgageCreated = new EventEmitter<User>();
  vacancyRate:number = 0;
  numBeds:number = 0;
  @Output() VacancyRate = new EventEmitter<number>();
  @Output() NumBeds = new EventEmitter<number>();
  managementFee:number = 0;
  @Output() ManagementFee = new EventEmitter<number>();
  user: SocialUser = {} as SocialUser;

  // showAmortization: boolean = true;
  // hoaFees: number = 0;
  // percentTaxRate: number = 0.511;
  // yearTerm: number = 30;
  // percentRate: number = 3.08;
  // downPayment: number = 239800;
  // monthlyHomeInsurance: number = 416;
  // price: number = 1300000;
  newMortgage: User = {} as User;
  

  constructor(
    private _mortgageCalculatorService: MortgageFormService,
    private _propertiesService: PropertiesService,
    private _userService:UserService,
    private _authService: SocialAuthService
  ) {}

  

  // ngOnInit():void{
  //   this._mortgageCalculatorService.GetMortgageDetails(this.showAmortization, this.hoaFees, this.percentTaxRate, this.yearTerm, this.percentRate, this.downPayment, this.monthlyHomeInsurance, this.price).subscribe((response:MortgageCalculatorModel)=> {
  //     console.log(response);
  //     this.MortgageCalcResult = response;
  // })
  //}

  submitMortgage(): void {
    // this.newMortgage.downPayment = 0;
    // this.newMortgage.loanTerm = 0;
    // this.newMortgage.interestRate = 0;
    // if(this.newMortgage.loan == null){
    //   this.newMortgage.loan = false;
    // }
    // this.newMortgage.zipCode = "";
    // console.log(this.newMortgage);
    if(this.newMortgage.downPayment == null){
      this.newMortgage.downPayment = 0;
    }

    if(this.newMortgage.loanTerm == null){
      this.newMortgage.loanTerm = 0;
    }

    if(this.newMortgage.interestRate == null ){
      this.newMortgage.interestRate = 0;
    }
    if(this.vacancyRate == null){
      this.vacancyRate = 0;
    }
    if(this.managementFee == null){
      this.managementFee = 0;
    }
    if(this.newMortgage.closingCost == null){
      this.newMortgage.closingCost = 0;
    }
    if(this.numBeds == null){
      this.numBeds = 0;
    }
    if (this.newMortgage.maxPrice == null) {
      this.newMortgage.maxPrice = 0;
    }
    if (this.newMortgage.zipCode == null) {
      this.newMortgage.zipCode = "0";
    }
    this.MortgageCreated.emit(this.newMortgage);
    this.newMortgage={} as User;
    this.VacancyRate.emit(this.vacancyRate);
    this.vacancyRate = 0;
    this.ManagementFee.emit(this.managementFee);
    this.managementFee = 0;

  }

  addUser(userParams:User):void{
    this._authService.authState.subscribe((user: SocialUser) => {
      this.user = user});
    let userInputs:User = userParams;
    // this._eventService.AddFavorite();
    userInputs.googleId = this.user.id;
    this._userService.addUser(userInputs).subscribe((response:User) =>{
      console.log(response)
      this.userListResult = response;
    });
  }

  //mortgate created output passes to New Mortgate to trigger event (mortgate created)
  //Form to submit mortgate, to mortgate created to new mortgage. 
}

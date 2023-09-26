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
  userInformation: User = {} as User;

 
  newMortgage: User = {} as User;
  

  constructor(
    private _mortgageCalculatorService: MortgageFormService,
    private _propertiesService: PropertiesService,
    private _userService:UserService,
    private _authService: SocialAuthService
  ) {}

  

  ngOnInit():void{
    this._authService.authState.subscribe((user: SocialUser) => {
      this.user = user 
    this.getUserInformation();
    });
  }
  

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
    this.addUser();
    this.MortgageCreated.emit(this.newMortgage);
   // this.newMortgage={} as User;
    this.VacancyRate.emit(this.vacancyRate);
   // this.vacancyRate = 0;
    this.ManagementFee.emit(this.managementFee);
   // this.managementFee = 0;

  }

  addUser():void{
    this._userService.updateUser(this.newMortgage).subscribe((response:User) =>{
      console.log(response)
      this.userListResult = response;
    });
  }

  getUserInformation() {
    this._userService.getByGoogleId(this.user.id).subscribe((response: User) => {
      console.log(response);
      this.newMortgage = response;
    })
  }

  //mortgate created output passes to New Mortgate to trigger event (mortgate created)
  //Form to submit mortgate, to mortgate created to new mortgage. 
}

import { Component, Input } from '@angular/core';
import { PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-mortgage-result',
  templateUrl: './mortgage-result.component.html',
  styleUrls: ['./mortgage-result.component.css']
})
export class MortgageResultComponent {
  @Input() DisplayResult:number = {} as number;
  @Input() downPament:number = {} as number;
  loneAmont:number=0;
  user:User = {} as User;
  constructor(private _userService:UserService) {}
 
  ngOnInit():void {
    this.loneAmont = this.calculateLoanAmount();
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
    result = this.DisplayResult - this.downPament;
    return result;
  }
}

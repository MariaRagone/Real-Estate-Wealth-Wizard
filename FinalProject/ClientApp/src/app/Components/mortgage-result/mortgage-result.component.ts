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
  @Input() DisplayResult:PropertiesByPostal = {} as PropertiesByPostal;
  constructor(private _userService:UserService) {}

  ngOnInit():void {
    // this._userService.
  }

  NewMortgage(newUser:User){
    // this._userService.SubmitMortgage(newUser).subscribe((response: User) =>{
    //   console.log(response);
    //   this.MortgageCalcResult.push(response);
    // });
  }

  calculateLoanAmount(purchaseprice:number, downPayment:number):number{
    let result:number = 0;
    result = purchaseprice - downPayment;
    return result;
  }
}

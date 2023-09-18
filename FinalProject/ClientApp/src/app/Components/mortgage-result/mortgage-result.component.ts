import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-mortgage-result',
  templateUrl: './mortgage-result.component.html',
  styleUrls: ['./mortgage-result.component.css']
})
export class MortgageResultComponent {
  
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
}

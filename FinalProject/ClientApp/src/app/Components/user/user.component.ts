import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { MortgageFormService } from 'src/app/Services/mortgage-form.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(
    private _userService: UserService,
    private authService: SocialAuthService,
    //private _mortgageService: MortgageFormService
  ) {} //dependency injection
  newUser: User = {} as User; //variable that connects your inputs
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  id: number = 1;
  userInformation: User = {} as User;
  
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      this.getUser();
      this.getUserInformation();
    });
  }

  getUser() {
    this._userService.getUserById(this.id).subscribe((reponse: User) => {
      console.log(reponse);
      this.newUser = reponse;
    });
  }

  addUser() {
    //this.allUsersResult = []; //you can remove this line, but it empties the array of the users. the website looks like its loading again
    this._userService.addUser(this.newUser).subscribe((response: User) => {
      console.log(response);
      this.getUser(); //recall the method so that the user list refreshes
    });
  }

  getUserInformation() {
    this._userService.getUserById(Number(this.user.id)).subscribe((response: User) => {
      console.log(response);
      this.userInformation = response;
    })
  }
}

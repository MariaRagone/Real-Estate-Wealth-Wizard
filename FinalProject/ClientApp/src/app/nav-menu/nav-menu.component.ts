import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { User } from '../Models/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  constructor(private authService: SocialAuthService, private _userService: UserService) { }
  
  createUser: User = {} as User;
  ngOnInit(): void {
    //subscribe will activate once logged in
    this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
        this.createUser.googleId = this.user.id;
        this.createUser.firstName = this.user.firstName;
        this.createUser.lastName = this.user.lastName;
        this._userService.addGoogleUser(this.createUser).subscribe((response: User) =>{
          console.log(response);
        })
        
    });
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  signOut(): void {
    this.authService.signOut();
    }
}

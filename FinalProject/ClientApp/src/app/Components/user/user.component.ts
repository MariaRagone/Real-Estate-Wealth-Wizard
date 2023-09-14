import { Component } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private _userService: UserService) {}
  newUser: User = {} as User; //variable that connects your inputs

  id: number = 1;
  ngOnInit() {
    this.getUser();
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
}

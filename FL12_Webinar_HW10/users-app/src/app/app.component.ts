import { Component } from '@angular/core';
import { UserService } from './shared/user.service';
import { User } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchString :string;
  addUserMode:boolean = false;

  constructor(public userService: UserService) { }

  addUser() {
    this.addUserMode = true;
  }

  handleUserAddCancel() {
    this.addUserMode = false;
  }

  handleUserSave(user :User) {
    this.userService.saveUser(user);
    this.addUserMode = false;
  }

}

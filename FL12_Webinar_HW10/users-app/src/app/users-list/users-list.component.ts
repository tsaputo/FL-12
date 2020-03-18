import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../constants';
import { UserService } from '../shared/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @Input()
  users: User[];

  @Input()
  editableUserId :string;


  constructor(private userService :UserService) {}

  editUser(user :User) {
    this.editableUserId = user.id;
  }

  deleteUser(user :User) {
    this.userService.deleteUser(user.id);
  }

  handleUserEditCancel() {
    this.editableUserId = null;
  }

  handleUserSave(user :User) {
    this.userService.saveUser(user);
    this.editableUserId = null;
  }
}

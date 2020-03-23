import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor( private userService: UserService) { }

  users$;
  getUsers() {
    this.users$ = this.userService.getUsers();
  }
  ngOnInit() {
   this.getUsers();
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(()=> this.getUsers());

  }
}

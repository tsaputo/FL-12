import { Component } from '@angular/core';
import { UserService } from './shared/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  searchString :string;

  constructor(public userService: UserService) { }

  addUser() {
    alert('sss');
  }

}
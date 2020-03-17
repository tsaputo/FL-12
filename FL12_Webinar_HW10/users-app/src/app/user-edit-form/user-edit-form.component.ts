import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../constants';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {
  @Input()
  user :User;
  @Output()
  onCancelEdit = new EventEmitter();
    
  userName: string;
  userEmail: string;
  userPhone: string;

  editForm = new FormGroup({
    userName: new FormControl(null, Validators.required),
    userEmail: new FormControl(null, Validators.required),
    userPhone: new FormControl(null, Validators.required)
  });

  constructor(private userService :UserService) { }
  
  ngOnInit(): void {
    if (!this.user.id) {
      this.createEditForm();
    }
  }

  save(user :User) {
    this.userService.saveUser(user);
  }

  cancel() {
    this.onCancelEdit.emit();
  }

  createEditForm() {
    this.editForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      userEmail: new FormControl(null, Validators.required),
      userPhone: new FormControl(null, Validators.required)
    });
  }
}  

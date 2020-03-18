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
  user :User = {id: "", name: "", email: "", phone: ""};
  @Output()
  onCancelEdit = new EventEmitter();
  @Output()
  onSaveEdit = new EventEmitter<User>();

  editForm :FormGroup;
  requiredFieldsMissing :boolean = false;

  constructor(private userService :UserService) { }
  
  ngOnInit(): void {
    this.editForm = new FormGroup({
        userName: new FormControl(this.user ? this.user.name : null, Validators.required),
        userEmail: new FormControl(this.user ? this.user.email : null, Validators.required),
        userPhone: new FormControl(this.user ? this.user.phone : null, Validators.required)
    });
  }

  save() {
    if (!this.editForm.valid) {
      this.requiredFieldsMissing =true;
      return;
    }
    this.user.name = this.editForm.controls["userName"].value;
    this.user.email = this.editForm.controls["userEmail"].value;
    this.user.phone = this.editForm.controls["userPhone"].value;
    this.onSaveEdit.emit(this.user);
  }

  cancel() { 
    this.onCancelEdit.emit();
  }
}  

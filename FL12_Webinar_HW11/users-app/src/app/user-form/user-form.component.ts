import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService, User } from '../../shared/user.service'
import { ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private userService :UserService,
    private activatedRoute :ActivatedRoute,
    private formBuilder: FormBuilder
    ) {
      this.userForm = formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        website: [''],
        address: ['']
      });
     }
  
  user$: Observable<User>;
  userForm: FormGroup;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.user$ = this.userService.getUser(id).pipe(
      tap(user => this.userForm.patchValue(user))
    )
  }

  saveUser() {
    let user:User = {
      id: this.activatedRoute.snapshot.params.id,
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
    };

    this.userService.saveUser(user);
  }

}

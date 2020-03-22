import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Route } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserService } from '../shared/user.service'
import { UserFormComponent } from './user-form/user-form.component';


const routes: Route[] = [
   {
      path: '',
      redirectTo: '/users',
      pathMatch: 'full'
   },
   {
      path: 'users',
      component: UsersListComponent
   },
   {
      path: 'users/:id',
      component: UserFormComponent
   }
]

@NgModule({
   declarations: [
      AppComponent,
      UsersListComponent,
      UserFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

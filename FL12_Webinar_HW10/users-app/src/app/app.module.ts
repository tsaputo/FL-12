import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UsersFilterPipe } from './shared/users-filter.pipe';
import { UserEditFormComponent } from './user-edit-form/user-edit-form.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    SearchBarComponent,
    UsersFilterPipe,
    UserEditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

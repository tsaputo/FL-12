import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AllPoolsComponent } from './all-pools/all-pools.component';
import { WarningEmployeesComponent } from './warning-employees/warning-employees.component';
import { EmployeeService } from './shared/employee.service';

const routes: Route[] = [
  {
     path: '',
     redirectTo: '/all',
     pathMatch: 'full'
  },
  {
     path: 'all',
     component: AllEmployeesComponent
  },
  {
     path: 'pools',
     component: AllPoolsComponent
  },
  {
    path: 'warnings',
    component: WarningEmployeesComponent
 }
]

@NgModule({
   declarations: [
      AppComponent,
      AllEmployeesComponent,
      AllPoolsComponent,
      WarningEmployeesComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule
   ],
   providers: [ EmployeeService ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

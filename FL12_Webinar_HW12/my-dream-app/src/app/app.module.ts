import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEmployeesComponent } from './all-employees/all-employees.component';
import { AllPoolsComponent } from './all-pools/all-pools.component';
import { WarningEmployeesComponent } from './warning-employees/warning-employees.component';

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
      AppRoutingModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee, Manager, Developer } from './model'
import { map } from 'rxjs/operators'

export interface IEmployee {
  id: number;
  rm_id: number;
  name: string;
  performance: string;
  salary: number;
  pool_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient :HttpClient) { }

  getEmployees():  Observable <Array<Employee>> {
    return this.httpClient
      .get<Array<IEmployee>>('/assets/epms.json')
      .pipe(
        map(array => this.transformToTree(array))
      )
  }

  transformToTree(employees: Array<IEmployee>) {
    let topManager;
    let employeesList = {};
    for (let i = 0; i < employees.length; i++) {
      let employee = employees[i];
      if (employee.pool_name) {
        employeesList[employee.id] = new Manager(employee)
      } else {
        employeesList[employee.id] = new Developer(employee);
      }
    }
    
    for (let key in employeesList) {
      let employee = employeesList[key];
      if (employee.rm_id !== null) {
        employeesList[employee.rm_id].addSubordinate(employee);       
      } else {  
        topManager = employee;
      }
    }      
    return [topManager];
  }
}

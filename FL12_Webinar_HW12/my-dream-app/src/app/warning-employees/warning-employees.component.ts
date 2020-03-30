import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import { Employee } from '../shared/model';

@Component({
  selector: 'app-warning-employees',
  templateUrl: './warning-employees.component.html',
  styleUrls: ['./warning-employees.component.css']
})
export class WarningEmployeesComponent implements OnInit {
  topManager: Array<Employee>;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.topManager = data;
      })
  }

}

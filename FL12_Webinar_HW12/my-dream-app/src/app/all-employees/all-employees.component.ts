import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import { Employee } from '../shared/model';


@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  topManager: Array<Employee>;

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.topManager = data;
      }
    );
  }
}

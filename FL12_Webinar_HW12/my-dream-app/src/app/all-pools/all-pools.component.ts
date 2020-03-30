import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import { Employee } from '../shared/model';

@Component({
  selector: 'app-all-pools',
  templateUrl: './all-pools.component.html',
  styleUrls: ['./all-pools.component.css']
})
export class AllPoolsComponent implements OnInit {
  topManager: Array<Employee>;

  constructor(public employeeService: EmployeeService) { }


  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.topManager = data;
      }
    )    
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'

@Component({
  selector: 'app-all-pools',
  templateUrl: './all-pools.component.html',
  styleUrls: ['./all-pools.component.css']
})
export class AllPoolsComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit() {
    
  }

}

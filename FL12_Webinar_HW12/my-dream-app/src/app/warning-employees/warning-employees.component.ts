import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service'
import { Employee, Developer } from '../shared/model';

@Component({
  selector: 'app-warning-employees',
  templateUrl: './warning-employees.component.html',
  styleUrls: ['./warning-employees.component.css']
})
export class WarningEmployeesComponent implements OnInit {
  topManager: Array<Employee>;
  team: Array<Employee>;

  constructor(public employeeService: EmployeeService) { }

  getFilteredEmployees(employees :Array<Employee>, filterStrategy) :Array<Employee> {
    let array = [];
    for (let employee of employees) {
      if(filterStrategy(employee)) {
        array.push(employee);
      }
      array.push(...this.getFilteredEmployees(employee.getSubordinates(), filterStrategy));
    }
    return array;
  }

  filterStrategyByPerformance(employee: Employee) {
      return employee.getPerformance() === "low";
    }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      (data) => {
        this.team = this.getFilteredEmployees(data, this.filterStrategyByPerformance);
      })
  }

}

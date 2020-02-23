class Employee {
   constructor(id, firstName, lastName, birthday, salary, department, position) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.salary = salary;
        this.department = department;
        this.position = position;
        Employee.EMPLOYEES.push(this);
   } 
   
   static EMPLOYEES = [];

   get age () {
       const diff = Date.now() - new Date(this.birthday).getTime();
       return parseInt(String(diff/(1000*60*60*24*365)),10);
   }

   get fullName() {
       return `${this.firstName} ${this.lastName}`;
   }

   quit () {
        Employee.EMPLOYEES.splice(Employee.EMPLOYEES.indexOf(this), 1);
   }

   retire() {
        this.quit();
        console.log("It was such a pleasure to work with you!");
   }

   getFired() {
        this.quit();
        console.log("Not a big deal!");

   }

   changeDepartment(newDepartment) {
        this.department = newDepartment;
   }

   changePosition(newPosition) {
       this.position = newPosition;
   }

   changeSalary(newSalary) {
        this.salary = newSalary;
   }

   getPromoted (benefits) {
       debugger;
       for  (let key in benefits) {
            if (key === "salary") {
                this.changeSalary(benefits.salary);
            } else if (key === "position") {
                this.changePosition(benefits.position);
            } else if (key === "department") {
                this.changeDepartment(benefits.department)
            }
       }
        console.log("Yoohoo!");
   }

   getDemoted (punishment) {
        for  (let key in punishment) {
            if (key === "salary") {
                this.changeSalary(punishment.salary);
            } else if (key === "position") {
                this.changePosition(punishment.position);
            } else if (key === "department") {
                this.changeDepartment(punishment.department)
            }
        }
        console.log("Damn!");
   }

}

class Manager extends Employee {
    constructor(id, firstName, lastName, birthday, salary, department) {
        super(id, firstName, lastName, birthday, salary, department);
        this.position = "manager";
    }

    get managedEmployees() {
        let managedEmployees = [];
        debugger;
        let currentEmployees = Employee.EMPLOYEES;
        for (let i = 0; i < currentEmployees.length; i++) {
            if (currentEmployees[i].department === this.department && currentEmployees[i].position !== 'manager') {
                managedEmployees.push(currentEmployees[i]);
            }
        } 
        return managedEmployees;
    }
}

class BlueCollarWorker extends Employee {
    constructor(id, firstName, lastName, birthday, salary, department, position) {
        super(id, firstName, lastName, birthday, salary, position, department, position);
    }
}

class HRManager extends Manager {
    constructor(id, firstName, lastName, birthday, salary, department, position) {
        super(id, firstName, lastName, birthday, salary, position, department, position);
    }
}

class SalesManager extends Manager {
    constructor(id, firstName, lastName, birthday, salary, department, position) {
        super(id, firstName, lastName, birthday, salary, position, department, position);
    }
}

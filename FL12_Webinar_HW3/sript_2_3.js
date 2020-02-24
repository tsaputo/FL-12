//task2

class Employee {
   constructor(obj) {
       
        this.id = obj.id;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.birthday = obj.birthday;
        this.salary = obj.salary;
        this.department = obj.department;
        this.position = obj.position;
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
    constructor(obj) {
        super(obj);
        this.position = "manager";
    }

    get managedEmployees() {
        let managedEmployees = [];
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
    constructor(obj) {
        super(obj);
    }
}

class HRManager extends Manager {
    constructor(obj) {
        super(obj);
        this.department = "hr";
    }
}

class SalesManager extends Manager {
    constructor(obj) {
        super(obj);
        this.department = "sls";
    }
}

//task3

const promoter = (state) => ({
    promote(benefits, id) {
        let ourState = state.managedEmployees.find((el) => {if (el.id === id) {return el;}});
        if (ourState !== undefined && ourState instanceof Employee) {
            ourState.getPromoted(benefits);
        } else return "no elements with such index!"
    }
});

function ManagerPro(manager) {
    return Object.assign(
        manager,
        promoter(manager),
    )
}
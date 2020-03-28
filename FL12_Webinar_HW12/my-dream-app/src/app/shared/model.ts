export abstract class Employee {
    private manager :Employee;
    private poolName: string;

    getPoolName(): string {
        return this.poolName;
    }

    setPoolName(poolName: string): void {
        this.poolName = poolName;    
    }

    getManager() :Employee {
        return this.manager;
    }

    setManager(manager : Employee) {
        this.manager = manager;
    }

    addSubordinate(employee :Employee) :void {}
    removeSubordinate(employee :Employee) :void {}
    getSubordinatesCount() :number {
        return 0;
     }

    isManager() :boolean { 
        return false; 
    }
}

export class Developer extends Employee {
    private id: number;
    private name: string;
    private performance: string;
    private salary: number;
    private rm_id: number;

    constructor({id, name, performance, salary, rm_id}) {
        super();
        this.id = id;
        this.name = name;
        this.performance = performance;
        this.salary = salary;
        this.rm_id = rm_id;
    }
}

export class Manager extends Developer {
    private subordinates :Employee[] = [];

    addSubordinate(employee :Employee) :void {
        this.subordinates.push(employee);
        employee.setManager(this);
    }

    removeSubordinate(employee :Employee) :void {
        const index = this.subordinates.indexOf(employee);
        this.subordinates.splice(index, 1);
        employee.setManager(null);
    }

    getSubordinatesCount() {
        let size = this.subordinates.length;
        for (let sub of this.subordinates) {
            size += sub.getSubordinatesCount()
        }
        return size;
    }

    isManager() :boolean {
        return true;
    }
}
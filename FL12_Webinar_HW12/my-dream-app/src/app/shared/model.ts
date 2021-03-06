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
    getSubordinates() {
        return [];
    }

    isManager() :boolean { 
        return false; 
    }

    getName() {}
    abstract getPerformance() :string;
    
    getSalary() {}
}

export class Developer extends Employee {
    private id: number;
    private name: string;
    private performance: string;
    private salary: number;
    private rm_id: number;
    private pool_name: string;

    constructor({id, name, performance, salary, rm_id, pool_name}) {
        super();
        this.id = id;
        this.name = name;
        this.performance = performance;
        this.salary = salary;
        this.rm_id = rm_id;
        this.pool_name = pool_name;
    }

    getName(): string {
        return this.name;
    }

    getPerformance(): string {
        return this.performance;
    }

    getSalary(): number {
        return this.salary;
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

    getSubordinates(): Array<Employee> {
        return this.subordinates;
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
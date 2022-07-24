class Department {
    // private id: string;
    // private name:string;

    private employees: string[] = [];

    constructor(private id:string,public name:string){
        // this.id;
        // this.name = name;
    }

    describe(this: Department){

        console.log(`Department (${this.id}): ${this.name}`)

    }

    addEmployee(employee:string){
        this.employees.push(employee) 
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
};

const accounting = new Department("R2D2","Accounting")

console.log(accounting)
accounting.addEmployee("Adrian");
accounting.addEmployee("Anthony");
// accounting.employees[2] = "Ashley"


accounting.printEmployeeInfo()

accounting.describe()




// const accountingCopy = {name:"Anthony", balance:accounting.currentBalance}

// accountingCopy.balance;


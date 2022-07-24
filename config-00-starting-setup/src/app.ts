class Department {

    public name:string;
    balance:number;
    private employees: string[] = [];

    constructor(n:string,b:number){
        this.name = n;
        this.balance = b;
    }
    currentBalance(this:Department){
        console.log("Your current balance is " + this.balance)
    }

    addEmployee(employee:string){
        this.employees.push(employee) 
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
};

const accounting = new Department("Accounting",300)

console.log(accounting)
accounting.addEmployee("Adrian");
accounting.addEmployee("Anthony");
// accounting.employees[2] = "Ashley"

accounting.currentBalance();
accounting.printEmployeeInfo()




// const accountingCopy = {name:"Anthony", balance:accounting.currentBalance}

// accountingCopy.balance;


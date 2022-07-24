class Department {
    // private id: string;
    // private name:string;
    protected employees: string[] = [];



    constructor(private readonly id:string,public name:string){
        // this.id;
        // this.name = name;
    }

    describe(this: Department){

        console.log(`Department (${this.id}): ${this.name}`)

    }

    addEmployee(employee:string){
        // this.id = "D2"
        this.employees.push(employee) 
    }

    printEmployeeInfo(){
        console.log(this.employees.length);
        console.log(this.employees)
    }
};

class ITDepartment extends Department {

    
    admins: string[];
    constructor(id:string,admins:string[]){
        super(id, "IT");
        this.admins =admins
    }

};

class AccountingDepartment extends Department {
    constructor(id:string, private reports:string[]){
        super(id, 'Accounting');
    }
    addEmployee(employee: string) {

        if(employee === "Anthony"){
            return;
        }
        this.employees.push(employee); 

        
    }
    addReport(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports)
    }
}



const it = new ITDepartment("R2D2",['Anthony'])

const account = new AccountingDepartment("1234", [])

console.log(it)
account.addReport("There seems to have been a miscalculation");

account.addEmployee('Anthony');
account.addEmployee('Brian');
account.printEmployeeInfo()

console.log(account)
it.addEmployee("Adrian");
it.addEmployee("Anthony");
// it.employees[2] = "Ashley"


it.printEmployeeInfo()

it.describe()

console.log(it)




// const accountingCopy = {name:"Anthony", balance:accounting.currentBalance}

// accountingCopy.balance;


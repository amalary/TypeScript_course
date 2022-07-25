abstract class Department {
    static fiscalYear = 2022;
    // private id: string;
    // private name:string;
    protected employees: string[] = [];



    constructor(protected readonly id:string,public name:string){
        // this.id;
        // this.name = name;
    }
    static createEmployee(name:string){
        return {name:name};

    }

   abstract describe(this: Department):void;

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

    describe() {

        console.log("IT Department - ID:" + this.id);
        
    }

};

class AccountingDepartment extends Department {
    private lastReport:string;
    private static instance: AccountingDepartment;

    get mosterRecentReport(){
        if(this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found.")
    }

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value')
        }
        this.addReport(value);

    }
   private constructor(id:string, private reports:string[]){
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }
    static getInstance() {
        if(this.instance){
            return this.instance
        }
        this.instance = new AccountingDepartment("D2", []);
        return this.instance


    }


    describe() {
        console.log('Accounting Department - id:' + this.id)
        
    }
    addEmployee(employee: string) {

        if(employee === "Anthony"){
            return;
        }
        this.employees.push(employee); 

        
    }
    addReport(text:string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports)
    }
};


const employee = Department.createEmployee("Brandon");

console.log(employee, Department.fiscalYear)


const it = new ITDepartment("R2D2",['Anthony'])

// const account = new AccountingDepartment("1234", [])
const account = AccountingDepartment.getInstance(); 
const account2 = AccountingDepartment.getInstance();



console.log(account, account2);


account.describe();

console.log(it)

account.mostRecentReport = "Thing seemm to be going smoothly"
account.addReport("There seems to have been a miscalculation");
console.log(account.mosterRecentReport)

account.addEmployee('Anthony');
account.addEmployee('Brian');
// account.printEmployeeInfo()

console.log(account)
it.addEmployee("Adrian");
it.addEmployee("Anthony");
// it.employees[2] = "Ashley"


// it.printEmployeeInfo()

it.describe()

console.log(it)




// const accountingCopy = {name:"Anthony", balance:accounting.currentBalance}

// accountingCopy.balance;


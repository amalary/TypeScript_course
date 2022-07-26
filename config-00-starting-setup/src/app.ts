type Admin = {
    name:string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate:Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name:'Anthony',
    privilages:["create-server"],
    startDate: new Date()
};


type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;
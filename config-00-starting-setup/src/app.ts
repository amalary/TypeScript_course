type Admin = {
    name:string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate:Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name:'Anthony',
    privileges:["create-server"],
    startDate: new Date(),
};


type Combinable = string | number;
type Numberic = number | boolean;

type Universal = Combinable & Numberic;

function add(a:number, b:number): number;

function add(a:string, b:string): string;

function add(a: Combinable, b: Combinable){
    if (typeof a === 'string' || typeof b === 'string'){
        return a.toString() + b.toString();
    }
    return a + b;
};

const result = add('Max', "Keeble")

result.split('')



// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee){
//     console.log('Name: ' + emp.name);
//     if('privileges' in emp) {
//         console.log('Privileges: ' + emp.privileges);
//     }
//     if('startDate' in emp) {
//         console.log('Start Datae: ' + emp.startDate);
//     }
// }

// printEmployeeInformation({name: "Jake", startDate: new Date()});

// class Car {
//     drive(){
//         console.log("Driving...")
//     }
// }

// class Truck {
//     drive(){
//         console.log("Driving a truck...")
//     }

//     loadCargo(amount: number) {
//         console.log("Loading cargo ..." + amount)
//     }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle){
//     vehicle.drive();

//     if(vehicle instanceof Truck){
//         vehicle.loadCargo(1000);
//     }
// }

// useVehicle(v1);

// useVehicle(v2);

// interface Bird {
//     type:"bird"
//     flyingSpeed:number;
// };

// interface Horse {
//     type:"horse"
//     runningSpeed:number;
// };

// type Animal = Bird | Horse;

// function moveAnimal(animal:Animal){
//     let speed;

//     switch(animal.type){
//         case "bird":
//         speed = animal.flyingSpeed;
//         break;
//         case "horse":
//         speed = animal.runningSpeed
//         break;
//     }
//     console.log('Moving at the speed of:' + speed )
// }

// moveAnimal({type:"bird",flyingSpeed:100});

// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;

// // :! elements to the left of the exclamation point will never yeild null 

// userInputElement.value = "Hello Everyone";

// interface ErrorContainer { //email:"Not a valid email  username: Must start with a capital letter"

//     [prop:string]:string
// }

// const errorBag: ErrorContainer = {

//     email:"Not a valid email",
//     userName: "Must start with a capital letter",
// };

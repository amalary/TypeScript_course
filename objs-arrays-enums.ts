// const person: {
//     name: string;
//     age: number;
// } = {

// const person: {
//     name:string;
//     age:number;
//     hobbies: string[];
//     role:[number,string]
// } ={ 
//     name: 'Maximilian',
//     age:30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2,'author']
// };

// person.role.push('admin');
// person.role[1] = 10; 

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role{ADMIN, READ_ONLY,AUTHOR};

const person={ 
    name: 'Maximilian',
    age:30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role = [0,'admin']

// let favoriteActivities:any[]; 
let favoriteActivities:string[];
favoriteActivities = ['Sports','hello world'];

console.log(person.name,person.age)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    //console.log(hobby.map()) This is an error the map method only works on arrays
}

if(person.role === Role.ADMIN){
    console.log("is read only")
} 
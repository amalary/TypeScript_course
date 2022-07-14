// const person: {
//     name: string;
//     age: number;
// } = {
   const person ={ 
    name: 'Maximilian',
    age:30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities:string[]; 
favoriteActivities = ['Sports'];

console.log(person.name,person.age)

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    //console.log(hobby.map()) This is an error the map method only works on arrays
}
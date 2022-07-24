const userName = "Anthony";

// userName = Max;

let age  = 30;

age = 29; 

// function added(a:number, b:number){
    
//     let result;
//     result=  a+b;
//     return result;
// };

// if(age > 20){
//     let isOld = true; 
// };

// console.log(isOld);

const added=(a:number, b:number =8) => {
    return a+ b
}

// const printOutput =(output: number | string)=> console.log(output);

// const button = document.querySelector("button");

// if(button){
//     button.addEventListener("click", event=> console.log(event))
// }

// printOutput(added(5)); 

const hobbies = ["Hockey", "Basketball","Swimming"]

const activeHobbies = ["Skateboarding","Tennis","Hiking"]

activeHobbies.push(...hobbies)

console.log(activeHobbies);

const person = {
    firstName: "Anthony",
    currentAge: "23"
}

const copiedPerson = {...person}

console.log(copiedPerson)

const adding=(...numbers:number[]) => {

    return numbers.reduce((currentRes, currentVal) => {

    return currentRes + currentVal
} , 0)


};

const addedUpNums = adding(5,6,9.3)

console.log(addedUpNums)

const [hobby1,hobby2, ...remainingHobbies] = hobbies; 

console.log(hobbies,hobby1,hobby2)

const {firstName:lastName,currentAge} = person;

console.log(lastName,currentAge)

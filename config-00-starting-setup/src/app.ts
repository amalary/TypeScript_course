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

const added=(a:number, b:number) => {
    return a+ b
}

console.log(added(2,5))

const printOutput =(output: number | string)=> console.log(output);

const button = document.querySelector("button");

if(button){
    button.addEventListener("click", event=> console.log(event))
}

printOutput(34); 
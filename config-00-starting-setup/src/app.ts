const names: Array<string> = ['Max',"Margaret"];


const promise: Promise<number> = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(10)
    }, 2000);
})

promise.then(data => {
    console.log(data)
})

function merge<T extends Object,U extends Object>(objA:T, objB:U){
    return Object.assign(objA,objB)
};

const newMerge = merge<{name:string}, {age:number}>({name:"Anthony"}, {age:20})

console.log(newMerge.age)

let p = new Promise((resolve, reject) =>{

    let a = 1 + 2

    if(a == 2){
        resolve("Success")
    }
    else{
        reject("Mission Failure")
    }
})

p.then((message)=> {
    
    console.log("This is in the then and it is a " + message)
}).catch((message) =>{
    console.log("This is in the catch and it is a " + message)
});

interface Lengthy {
    length:number;
}

function countAndDescribe <T extends Lengthy>(element: T): [T,string]{

    let description = 'I have no value';

    if(element.length === 1){
        description = "I have one element";
    }
    else if(element.length > 1){
        description = " Got " + element.length + " elements ";
    }
    return [element,description]

}

console.log(countAndDescribe("how has your day gone"))


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){

    return 'Value of: ' + obj[key]

}

console.log(extractAndConvert({name: "Anthony"}, "name"));

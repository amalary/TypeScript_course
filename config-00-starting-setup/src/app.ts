const names: Array<string> = ['Max',"Margaret"];


const promise: Promise<number> = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve(10)
    }, 2000);
})

promise.then(data => {
    console.log(data)
})



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

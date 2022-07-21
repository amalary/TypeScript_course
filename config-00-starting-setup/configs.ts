const button = document.querySelector("button")!;


// let appId:string = "AFDADGA$^%#^#3534"

function add(n1:string, n2:string){

    if(n1+n2){

        return n1 + n2
    }
    return;
}




function clickHandler(message:string,){ 

    // let sirName:string = "Max"; 
    
    console.log("Clicked Me" + message)
}

if(button){
button.addEventListener("click", clickHandler.bind(null, "You are super welcome my guy")) 
};






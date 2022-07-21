

let appID = 'abc';
const button = document.querySelector("button")!;




function clickedHandler(message:string){
    console.log("You clicked" + message)
}

if(button){
    
    button.addEventListener("click", clickedHandler.bind(null,'Hello Mate'));

}






interface Objecttype {

    name:string,
    age:number,
    from:string,
    favorites?:string,

}

let obj:Objecttype = {
    name:"Anthony",
    age:22,
    from:"mass",
    
} 

obj.favorites = "Kanye West"

console.log(obj)


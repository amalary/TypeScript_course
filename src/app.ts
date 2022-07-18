const button = document.querySelector("button")!;


function clickedHandler(message:string){
    console.log("You clicked" + message)
}

if(button){
    
    button.addEventListener("click", clickedHandler.bind(null,'Hello Mate'));

}
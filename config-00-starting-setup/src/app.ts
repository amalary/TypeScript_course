interface Greetable {
    name:string;
    
    greet(phrase:string):void;
};

class Person implements Greetable{
    name:string;
    age =20;
    constructor(n:string){
        this.name = n;

    }
    greet(phrase:string){

        console.log(phrase + " " +this.name)

    }

}

let user1:Greetable;

user1 =new Person("Anthony")

user1.greet("Hello there how is it going")

console.log(user1)
export default class Person {
    constructor(name){
        this.name = name;
    }

    printArrow(){
        setTimeout(()=>{
            console.log("Arrow",this.name);
        })
    }

    printFunction(){
        setTimeout(function(){
            console.log("Function",this.name)
        })
    }
}

const person = new Person('Bob')
person.printArrow();
person.printFunction();


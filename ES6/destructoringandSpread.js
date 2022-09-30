const alphabet = ["a","b","c","d","e"]
const number = ["1","2","3","4","5"]

//const a = alphabet[0];
//const b = alphabet[1]; 

const [a,,c, ...rest] = alphabet;
//const newArray = alphabet.concat(number) 
const newArray = [...alphabet,...number]


console.log("a",a) //a
// console.log("b",b) //b
console.log("c",c) //c
console.log("rest",rest) // d , e

console.log("newArray",newArray) // a,b,c,d,e,1,2,3,4,5

const sumAndMultiply = (a,b) =>{
	return [a+b,a*b,a/b];
}

const [sum,multiply, division = "no Division"] = sumAndMultiply (2,3)

// console.log("sumAndMultiply",sumAndMultiply(2,3)) //5,6
console.log("sum", sum) //5
console.log("multiply", multiply) //6
console.log("division", division) //no Division


const personOne = {
	name: "Jack",
	age: 30,
	city: London
}

const personTwo = {
	name: "Bob",
	age: 20,
	city: Boston,
	skills: {
		area: " Cloud computing",
		provider: " AWS"
	}	
}

const {name: firstname  , ...rest1} = personOne;

const personThree = {...personOne, ... personTwo}	

//{
// name : "Bob",
// age: 20,
// city: Boston
//}


console.log("name",name); // Jack
console.log("age",age); //30
console.log("area",area); // CLoud computing
console.log
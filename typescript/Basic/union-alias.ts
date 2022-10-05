//Type
type CombineStringandNumber = number |string

//union type: multiple type

//Literal type: Type as we defined
let resultConverted: 'as-number'|'as-text'

const combine = (input1: CombineStringandNumber, input2: CombineStringandNumber) =>{
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1 + input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combineNumber = combine(30,26);
console.log(combineNumber)
const combineNames = combine("Khanh","Jack");
console.log(combineNames)
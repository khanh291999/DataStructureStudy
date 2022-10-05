//Function and callback
function sum (num1:number, num2:number,cb:(num:number)=>void){
    let result = num1 + num2;
    cb(result)
}

function printResult(num:number):void{
    console.log('Result:' + num)
}

sum(10,20,(result)=>{
    console.log(result);
    return result
})

// printResult(sum(5,12))

// //Function types
// //let combineValues: Function;
// let combineValues: (a:number,b:number) =>number;
// combineValues = sum;
//combineValues = printResult;

// console.log(combineValues(8,8))


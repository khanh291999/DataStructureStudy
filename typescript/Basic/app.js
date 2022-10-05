function sum(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
function printResult(num) {
    console.log('Result:' + num);
}
sum(10, 20, function (result) {
    console.log(result);
    return result;
});
// printResult(sum(5,12))
// //Function types
// //let combineValues: Function;
// let combineValues: (a:number,b:number) =>number;
// combineValues = sum;
//combineValues = printResult;
console.log(combineValues(8, 8));

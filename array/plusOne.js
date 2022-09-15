var plusOne = function(digits) {
    for(let i = digits.length - 1; i >=0 ; i--){
        if(digits[i] < 9){
            digits[i] = digits[i] +1
            return digits;
        }
        else{
            digits[i] = 0;
        }
    }
    digits.unshift(1)
    return digits
};

const digits = [1,2,3] //Output [1,2,4]
const digits1 =[9] //Output [10]
console.log("digits",plusOne(digits))
console.log("digits1",plusOne(digits1))
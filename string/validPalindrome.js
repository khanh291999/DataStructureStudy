const isPalindrome = s => {
    let arr = s.split();
    let result = []
    let alphabet = "0123456789abcdefghijklmnopqrstuvwxyz"
    for(let i in arr){
        if(alphabet.includes(i.toLowerCase())){
            result.push(i.toLowerCase())
        }
    }
    return (result.join('')==result.reverse().join(''))
};

console.log(isPalindrome("race a car"))
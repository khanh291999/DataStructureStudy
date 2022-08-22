const fib = n =>{
    if (n <= 2) return 1;
    return fib (n -1) + fib (n-2);
}
height = n;
//number of level = n;
//Time complexity: 0(2^n) 
//Space complexity: 0(n)

const fibOptimize = (n, memo = {}) =>{
    if(memo[n] != null){
        return memo[n];
    }
    if (n <= 2) return 1;
    memo[n] = fib (n -1, memo) + fib (n-2, memo);
    return memo[n];
}
//Time complexity: 0(n) 
//Space complexity: 0(n)


console.log(fibOptimize(6)); //8
console.log(fibOptimize(7)); //13
console.log(fibOptimize(8)); //21
console.log(fibOptimize(50)); //12586269025
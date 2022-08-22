const howSum = (targetSum, numbers) =>{
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num in numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null){
            return [...remainderResult, num]
        }
    }
    return null;
}
// brute force
// m = targetSum
// n = array length
//Time complexity = 0(n^m *m)
//Space complexity = 0(m)

const howSumOptimize = (targetSum, numbers, memo ={}) =>{
    if(memo[targetSum] != null) return memo[targetSum];
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;
    for(let num in numbers){
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if(remainderResult !== null){
            memo[targetSum] = [...remainderResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null
    return null;
}
//Time complexity = 0(n*m^2)
//Space complexity = 0(m^2)

console.log(howSum(7, [2, 3])); //[3,2,2]
console.log(howSum(7, [2, 4])); //[4,3]
console.log(howSum(300, [7, 14])); //null
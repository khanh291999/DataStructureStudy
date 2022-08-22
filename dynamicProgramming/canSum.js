
const canSum = (targetSum, numbers) => {
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num in numbers) {
        const remainder = targetSum - num;
        if(camSum(remainder, numbers)=== true){
            return true;
        }
    }
    return false;
}
// brute force
// m = targetSum
// n = array length
//Time complexity = 0(n^m)
//Space complexity = 0(m)


const canSumOptimize = (targetSum, numbers, memo= {}) => {
    if(memo[targetSum] != null){
        return memo[targetSum];
    }
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;
    for(let num in numbers) {
        const remainder = targetSum - num;
        if(canSumOptimize(remainder, numbers, memo)=== true){
            memo[targetSum] = true;
            return true
        }
    }
    memo[targetSum] = false;
    return false;
}
//memoized
////Time complexity = 0(n*m)
//Space complexity = 0(m)

console.log(canSumOptimize(7, [2, 3])); //true
console.log(canSumOptimize(7, [2, 4])); //false
console.log(canSumOptimize(300, [7, 14])); //false
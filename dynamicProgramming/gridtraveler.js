const gridTraveler = (m,n, memo = {}) => {
    if(m === 0 || n===0) return null;
    if(m === 1 && n===1) return 1;
    return gridTraveler(m - 1, n) + gridTraveler(m, n-1 );
}
//number of level = n + m;
//Time complexity: 0(2^n+m) 
//Space complexity: 0(n+m)

const gridTravelerOptimize = (m,n, memo = {}) => {
    let key = m + ',' + 'n';
    if(memo[key] != null){
        return memo[key];
    }
    if(m === 0 || n===0) return null;
    if(m === 1 && n===1) return 1;
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n-1 , memo);
    return memo[key];
}
//Time complexity: 0(n*m) 
//Space complexity: 0(n+m)


console.log(gridTravelerOptimize(3,3)); 
console.log(gridTravelerOptimize(2,3)); 
console.log(gridTravelerOptimize(4,4)); 
console.log(gridTravelerOptimize(18,18));
// Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N.
// Find the missing element.
// -----------------------
// Example 1:
// Input:
// A[] = {1,2,3,5,6,7}
// Output: 4
// ------------------------
// Example 2:
// Input:
// A[] = {6,1,2,8,3,4,7,10,5}
// A1[] = {1,2,3,4,5,6,7,8,10}
// Output: 9
// ------------------------
// Advanced:
// arr = [1, 2, 4, 6, 8, 12, 14]
// Output: 10

const arr = [6,1,2,8,3,4,7,10,5,11]
const length = arr.length;

const missingElement = arr =>{
    const total = ((length+1)*(length+2))/2
    //12345678910
    let actualTotalofArray = 0;
    let result = 0;
    for(let i =0 ; i<arr.length; i++){
        actualTotalofArray += arr[i]
    }
    console.log("total",total)
    console.log("actualTotalofArray",actualTotalofArray)
    return result = total - actualTotalofArray;
}

console.log("Missing Element", missingElement(arr))



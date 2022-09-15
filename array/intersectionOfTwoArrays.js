// Given two integer arrays nums1 and nums2, return an array of their intersection. 
// Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

const intersect = (nums1,nums2) => {
    let obj = {}
    let result = []
    //make a hashmap of the first array of nums
    for(let i of nums1){
        if(!obj[i]){
            obj[i] = 1
        }
        else{
            obj[i]++
        }
    }
    //loop through the second array of nums and see if the hashmap has a count of the value
    for(let i of nums2){
        if(obj[i]>0){
            result.push(i);
            obj[i]--
        }
    }
    return (result);

};

const nums1 = [1,2,2,1]
const nums2 = [2,2]
console.log(intersect(nums1,nums2))
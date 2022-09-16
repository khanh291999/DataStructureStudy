//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function(nums) {
    let temp = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i]==0){
            nums.splice(i,1);
            temp.push(0);
        }
    }
    console.log(nums)
    console.log(temp)
    return [...nums, ...temp]
};

var moveZeroeswithoutneedtemp = function(nums) {
    let index =0;
    for(let i = 0; i < nums.length; i++){
        const num = nums[i]
        if(num !==0){
            nums[index] = num;
            index++
        }
    }
    for(let i = index; i< nums.length; i++){
        nums[i] = 0
    }
    return nums
};

const arr = [0,1,0,3,12]; //[ 1, 3, 12, 0, 0 ]
console.log(moveZeroeswithoutneedtemp(arr))
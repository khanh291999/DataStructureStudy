var singleNumber = function(nums) {
    const ht={};
    for(const num in nums){
        ht[num] = ht[num] +1 ||1
    }
    for(const key in ht){
        if(ht[key]===1){
            return key;
        }
    }
};

const nums = [4,1,2,1,2];
console.log(singleNumber(nums))
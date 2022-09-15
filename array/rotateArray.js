const revNums = (num,start,end)=>{
    while(start < end){
        [num[start], num[end]] = [num[end], num[start]]
        start++;
        end--;
    }
}

var rotate = function(num, k) {
    k =k % num.length;
    num.reverse();
    revNums(num, 0 , k-1)
    revNums(num, k , num.length -1)
};


const arr = [1,2,3,4,5,6,7] //[5,6,7,1,2,3,4]
const k = 3
console.log(rotate(arr,k))
const removeElement = (arr, val)=> {
    // if(arr.length <=1) return arr
    for(let i =0; i < arr.length; i++){
        console.log(arr.length)
        if(arr[i] == val){
              arr.splice(i, 1); 
             i--;
        }
    }
    return arr;
};

const arr = [0,0,0,0,0,0,0,1,1,1,2,2,3,3,4,5,6,7,7,7,7,8,10,11];
const val = 3;
console.log(removeElement(arr,val))

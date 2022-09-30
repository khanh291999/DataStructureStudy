const removeDuplicates = arr =>{
    if(arr.length == 0) return 0;
    let result = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i]!=arr[i+1]){
           arr[result] = arr[i];
            result+=1;
        }
    }
    let finalarray = arr.splice(0,result)
    return [result, finalarray];
}

const arr = [1,1,2];
const arr1 = [0,0,0,0,0,0,0,1,1,1,2,2,3,3,4,5,6,7,7,7,7,8,10,11];
console.log(removeDuplicates(arr1))
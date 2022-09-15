const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    const mid = arr.length/2
    const right = [...arr]
    const left = right.splice(0,mid)
    return mergeUnsortedArray(mergeSort(left), mergeSort(right))
}

const mergeUnsortedArray = (left,right) =>{
    const sortedArray = [];
    while(left.length && right.length){
        if(left[0]< right[0]){
            sortedArray.push(left.shift())
        }
        else{
            sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

const findklargest = (arr,k,n) =>{
    
    return arr[n-k];
}

const arr = [1,5,2,6,3,2]
const k = 3
const n = arr.length;
console.log(mergeSort(arr));   
console.log(findklargest(mergeSort(arr),k,n));  
const mergeSort = arr =>{
    if(arr.length <= 1) return arr;
    const right = [...arr];
    const middlePoint = arr.length / 2;
    const left = right.splice(0, middlePoint);
    return mergeUnsortedArrs(mergeSort(left), mergeSort(right))
}

const mergeUnsortedArrs = (left,right) =>{
    const sortItem = [];
    while(left.length&& right.length){
        if(left[0] <= right[0]){
            sortItem.push(left.shift())
        }
        else{
            sortItem.push(right.shift())
        }
    }
    return [...sortItem,...left,...right];
}




const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // *** => [3, 9, 10, 27, 38, 43, 82]
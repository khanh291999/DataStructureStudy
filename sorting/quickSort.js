const quickSort = arr =>{
    if (arr.length <2) return arr;
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex]
    let currentItem;
    const left = [];
    const right = [];
    for(let i = 0; i < pivotIndex; i++){
        currentItem = arr[i];
        if(currentItem < pivot){
            left.push(currentItem)
        }
        else{
            right.push(currentItem)
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}



const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(quickSort(arr)); // *** => [3, 9, 10, 27, 38, 43, 82]
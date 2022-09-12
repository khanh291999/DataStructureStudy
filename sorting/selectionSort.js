const selectionSort = arr =>{
    let currentIndex;
    for (let i = 0; i< arr.length; i++){
        currentIndex = i;
        for(let j= i + 1; j < arr.length; j++){
            if(arr[currentIndex]>arr[j]){
                currentIndex = j;
            }
        }
        if(i !== currentIndex){
            let temp = arr[i];
            arr[i] = arr[currentIndex];
            arr[currentIndex] = temp;
        }
    }
    return arr
}

const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(selectionSort(arr)); // *** => [3, 9, 10, 27, 38, 43, 82]
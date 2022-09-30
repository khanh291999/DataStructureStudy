const arr = [1,2,3,4,5]
const length = arr.length;
const shuffleArr = [...arr]

const swap = (arr, i, j) =>{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const shuffle = (arr) =>{
    for(let i = 0; i< shuffleArr.length; i++){
        console.log("shuffleArr",shuffleArr)
        swap(shuffleArr,i,Math.floor(Math.random()*(shuffleArr.length)));
    }
    return shuffleArr;
}


console.log(shuffle(arr))
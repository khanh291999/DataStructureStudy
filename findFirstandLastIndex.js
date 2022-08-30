const firstIndex = (arr,x,n) =>{
    let low = 0, high = n - 1, res = -1;
    while (low <= high) 
    {
          
        // Normal Binary Search Logic
        let mid = Math.floor((low + high) / 2);
          
        if (arr[mid] > x)
            high = mid - 1;
        else if (arr[mid] < x)
            low = mid + 1;
  
        // If arr[mid] is same as x, we
        // update res and move to the left
        // half.
        else
        {
            res = mid;
            high = mid - 1;
        }
    }
    return res;
}

const lastIndex = (arr,target,n) =>{
    let low = 0, high = n - 1, res = -1;
    while (low <= high) 
    {
          
        // Normal Binary Search Logic
        let mid = Math.floor((low + high) / 2);
          
        if (arr[mid] > x)
            high = mid - 1;
        else if (arr[mid] < x)
            low = mid + 1;
  
        // If arr[mid] is same as x, we
        // update res and move to the right
        // half.
        else 
        {
            res = mid;
            low = mid + 1;
        }
    }
    return res;
}

const final = () =>{
    return [firstIndex(),lastIndex()]
}

const arr = [1,2,3,3,3,3,3,6,8];
const x = 3;
const n = arr.length;
console.log("First Index",firstIndex(arr,x,n))
console.log("Last Index",lastIndex(arr,x,n))
console.log("Final",final())
// function setTimeoutPromise(delay) {
//     return new Promise((resolve, reject) => {
//       if (delay < 0) return reject("Delay must be greater than 0")
  
//       setTimeout(() => {
//         resolve(`You waited ${delay} milliseconds`)
//       }, delay)
//     })
//   }


//   doStuff()
// async function doStuff() {
//   const msg1 = await setTimeoutPromise(250)
//   console.log(msg1)
//   console.log("First Timeout")

//   const msg2 = await setTimeoutPromise(500)
//   console.log(msg2)
//   console.log("Second Timeout")
// }

function setTimeoutPromise(delay){
    return new Promise((resolve,reject)=>{
        if (delay < 0) return reject("Delay must be larger than 0")
        setTimeout(()=>{
            resolve(`You waited ${delay} milisecond`)
        },delay)
    })
}

async function doStuff(){   
    const ms1 = await setTimeoutPromise(250)
    console.log(ms1);
    console.log("First timeout")

    const ms2 = await setTimeoutPromise(500)
    console.log(ms2);
    console.log("Second timeout")
}

doStuff();
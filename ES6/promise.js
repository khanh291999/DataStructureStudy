let p = new Promise((resolve,reject)=>{
    let a = 1 + 1
    if (a==2){
        resolve("Correct")
    }
    else{
        reject("False")
    }

})


p.then((message)=>{
    console.log("This is in the THEN" + message)
}).catch((message)=>[
    console.log("This is in the CATCH block" + message)
])
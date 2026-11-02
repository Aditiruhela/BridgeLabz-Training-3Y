console.log("start")
//api-->1min
// setTimeout(()=>{     //browser ka thread na ki javascript ka-->Asynchronus code
//     console.log("hello")
// },3000)

// setTimeout(()=>{ 
//     console.log("welcome")    
// },1000)

//get user
//getusercollage()
//callback,promise,async await
function getUser(callback){
    setTimeout(()=>{
        console.log("user data...")
        callback()
    },3000)
}
function getUserBankDetail(){
    setTimeout(()=>{
        console.log("user data detail...")
    },1000)
}
function getUserEmpDetail(){
    setTimeout(()=>{
        console.log("emp detail")
    },2000)
}
// getUser()
// getUserBankDetail()
//--------------------------------------------------------------------------------------
getUser(()=>{                            //CALL BACK HELL
    getUserBankDetail(()=>{
        getUserEmpDetail()
    })
})
//--------------------------------------------------------------------------------------
console.log("end")

//promise
let mypromise=new Promise((resolve,reject)=>{
    let age=22;
    if(age>10){
        resolve(`age is valid`);
    }else{
        reject(`age is not valid`);
    }
})
mypromise
.then((msg)=>{
    console.log(msg,"age valid")
})
.catch((msg)=>{
    console.log(msg,"age invalid")
})


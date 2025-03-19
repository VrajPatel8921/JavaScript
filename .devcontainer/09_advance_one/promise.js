let promiseOne=new Promise((resolve,reject)=>{
    //Do An Asyn Tasks
    //DB Calls , Cryptography, Networks
    setTimeout(()=>{
        // console.log("Asyn Task Is Completed");
        resolve();
    },5000)
})

promiseOne.then(()=>{
    // console.log("Promise Consumed");
})

new Promise((resolve, reject) => {
    setTimeout(()=>{
        // console.log("Asyn Task Is Completed");
        resolve();
    },2000)
}).then(()=>{
    // console.log("Asyn 2 Resolved");
})

let promiseThree=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username:"Chai", email:"chai@example.com"});
    },1000)
})

promiseThree.then((user)=>{
    // console.log(user);
    
})

let promiseFour=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"Vraj",passward:"123"})
        }else{
            reject('ERROR: Somthing Went Wrong');
        }
    }, 1000);
})

promiseFour.then((user)=>{
    // console.log(user);
    return user.username;
}).then((username)=>{
    // console.log(username);
}).catch((err)=>{
    // console.log(err);
}).finally(()=>{
    // console.log("Promise Either Resolve Or Rejectes");
})


let promiseFive=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"JavaScript",passward:"123"})
        }else{
            reject('ERROR: JS Went Wrong');
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        let response=await promiseFive
        // console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromiseFive();

//Async Await Method

async function getAllUsers() {
    try {
        let response=await fetch('https://randomuser.me/api/');
        let data=await response.json();
        console.log(data);    
    } catch (error) {
        console.log("E:"+ error);
    }
    
}
getAllUsers();

//Using Try Catch Method

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data.results[0].email);
}).catch((error)=>{
    console.log("Error:"+error);
})

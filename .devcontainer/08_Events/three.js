const changeNameStart=()=>{
    document.querySelector('h1').innerHTML="Set Interval Start";
    console.log("Interval Start");
    
}
const changeNameStop=()=>{
    document.querySelector('h1').innerHTML="Set Interval Stop";
    console.log("Interval Stop");
    
}

let intervalInfo=setInterval(changeNameStart,2000);


document.querySelector("#start").addEventListener('click',()=>{
     
})

document.querySelector("#stop").addEventListener('click',()=>{
    changeNameStop();
    clearInterval(intervalInfo);
})


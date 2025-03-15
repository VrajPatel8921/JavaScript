const sayVraj=()=>{
    console.log("Vraj");
}
const changeText=()=>{
    document.querySelector('h1').innerHTML="Hello Vraj";

}
setTimeout(sayVraj,2000);
let changeMe=setTimeout(changeText,2000);

document.querySelector("#stop").addEventListener('click',()=>{
    clearTimeout(changeMe);
    console.log("Event Stopped");
    
})
// function outer() {
//     let userName="Vraj";
//     function inner(){
//         let secret="Secreat";
//         console.log("Inner:",userName);
//     }
//     function innerTwo(){
//         console.log("InnerTwo:",userName);
//         console.log(secret);
//     }
//     inner();
//     innerTwo();
// }
// outer();
// console.log(userName);


// document.getElementById('orange').addEventListener('click',(e)=>{
//     document.body.style.backgroundColor="orange";
// })
// document.getElementById('green').addEventListener('click',(e)=>{
//     document.body.style.backgroundColor="green";
// })

function clickHandler(colour){
    return function(){
        document.body.style.backgroundColor=`${colour}`;
    }
}
document.getElementById('orange').onclick=clickHandler("orange");
document.getElementById('green').onclick=clickHandler("green")
 // document.getElementById('owl').onclick = function(){
    //     alert("owl clicked")
    // }

     // attachEvent()
    // jQuery - on

//Modren JavaScript


/* Need TO Know
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode
*/

document.getElementById('images').addEventListener('click',(e)=>{
    // console.log("Click Inside The Ul");
},false)

document.getElementById('owl').addEventListener('click',(e)=>{
    // console.log("Owl Clicke");
    // e.stopPropagation();
},false)

document.getElementById('google').addEventListener('click',(e)=>{
    
    e.preventDefault();
    // e.stopPropagation();
    // console.log("Google Clicked");

})
/* Event Propogations
//True-> Capturing Event -> Top TO Bottom
//False-> Bubbling Event -> Bottom To Top
*/

//Remove Li PRoject

document.getElementById('images').addEventListener('click',(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName == 'IMG'){
        console.log(e.target.id);
        let removeIt=e.target.parentNode;
        removeIt.remove();
    }
    // removeIt.parentNode.removeChild('removeIt');
})


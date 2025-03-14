let button=document.querySelectorAll(".button");
let body=document.querySelector("body");

button.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id=="grey"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id=="white"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id=="blue"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id=="yellow"){
            body.style.backgroundColor=e.target.id;
        }
        else if(e.target.id=="pink"){
            body.style.backgroundColor=e.target.id;
        }
        
    })
})


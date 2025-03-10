let div=document.createElement('div');
console.log(div);
div.className="main";
div.id=Math.floor(Math.random()*10+1);
div.setAttribute('title',"Vraj Patel");
div.style.color="Green";
div.innerText="Chai Aur Code";

document.body.appendChild(div);
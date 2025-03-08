let title=document.getElementById("Heading");
console.log(title.className);

title.setAttribute('class','Test Heading');
console.log(title.className);

console.log(title)
title.style.backgroundColor='Red';

console.log(title.innerText);
console.log(title.textContent);
console.log(title.innerHTML);

console.log(document.querySelector('h2'));
console.log(document.querySelectorAll('h2'));
//Query Selectors && Query SeloctorAll

let ul=document.querySelector('ul');
let li=ul.querySelector('li');
console.log(li);
li.style.backgroundColor="Green";

let tempLiList=document.querySelectorAll('li');

tempLiList[2].style.color="black";

let liItem=document.getElementsByClassName('List-item');
console.log(liItem);

let myConvertedArray=Array.from(liItem);
console.log(myConvertedArray);

myConvertedArray.forEach((li)=>{
    li.style.color="Orange";
})



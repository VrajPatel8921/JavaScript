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
const addLAnguage=(langName)=>{
    
    let li=document.createElement('li');
    li.setAttribute('style',"list-style: none;")
    li.innerHTML=`${langName}`;
    document.querySelector('.language').appendChild(li);

}

const addOptiLanguage=(langName)=>{
    let li=document.createElement('li');
    li.setAttribute('style',"list-style: none;")
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);

}



addLAnguage("C++");
addLAnguage("Python");
addOptiLanguage("Java");

//Edit
let list=document.querySelector("li:nth-child(2)");
let newli=document.createElement('li');
newli.textContent="C";
list.replaceWith(newli);

// //Edit
// let firstLang=document.querySelector("li:firstChild");
// firstLang.outerHTML="<li>PHP<li/>"

//Delete
let lastLang=document.querySelector("li:last-child");
lastLang.remove();




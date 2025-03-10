let parent=document.querySelector('.parent');
console.log(parent);
console.log(parent.children);
console.log(parent.children[0].innerHTML);

// for (let index = 0; index < parent.children.length; index++) {
//     console.log(parent.children[index].innerText);
    
// }

parent.children[0].style.color="orange";
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


let dayOne=document.querySelector('.days');
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);

console.log("Node:", parent.childNodes);



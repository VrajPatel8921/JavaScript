function myName(){
    console.log("Hello Vraj");
}
myName();

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
// addTwoNumbers(3,8);


function addTwoNumbers(num1,num2){
    let result=num1+num2;
    return result
}
let result=addTwoNumbers(88,12);
console.log(result);

function userLoggedinMessage(username){
    if(username){
        return `${username} Is Just LoggedIn`;

    }
        console.log("Please Enter UserName");
       
    
}
let message=userLoggedinMessage();

console.log(message);

function calculateCartPrice(...price){
    return price;
}
console.log(calculateCartPrice(100,55,66,98));

const user={
    name:"Vraj",
    price:799
}
function handleObject(anyObject){
    console.log(`${anyObject.name} and Price Is ${anyObject.price}`);
}
// handleObject(user);
handleObject({
    name:"VG",
    price:899
})

let myNewArray=[100,200,300,555];
function getArray(anyArray){
    return anyArray;
}
console.log(getArray(myNewArray));

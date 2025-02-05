//Primitive
//7 Types:String,Number,Boolean,null,undefined,symbol,bigInt;

const Score=100;
const ScoreValue=100.3;

const isLoggedIn=true;
let userEmail;

const id=Symbol('123');
const anotherId=Symbol('123');

console.log(id==anotherId);


//Reference (Non-Primitive)
//Array,Object,Function

let arr=["Vraj","IronMan","Thor"];
let obj={
    name:"Vraj",
    age:19
}

console.log(arr);
console.log(obj);

// let myFun=Function(){
//     console.log("Hello");
// }

//Stack(Primitive),Heap(Non-Primitive)

let myName="Vraj";
let myAnothername=myName;
myAnothername="Urvish";
console.log(myName);
console.log(myAnothername);

let userOne={
    email:"abc@gmail.com",
    upi:"abc@ybl"
}
let userTwo=userOne;

userTwo.email="abc@yahoo.com";
console.log(userOne.email);
console.log(userTwo.email);

//Singleton
//object.create

//Object Literal
let mySym=Symbol("key1");
const jsUser={
    name:"Vraj",
    "full name":"Vraj Patel",
    age:"19",
    [mySym]:"myKey1",
    location:"Gandhinagar",
    email:"vp@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser.mySym);

jsUser.email="Vraj@chatgpt.com";
// Object.freeze(jsUser);
jsUser.email="Vraj@yahoo.com";
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello jsUSer");
}
jsUser.greetingTwo=function(){
    console.log(`Hello jsUSer ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

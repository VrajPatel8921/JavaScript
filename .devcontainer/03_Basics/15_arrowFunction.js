const user={
    username:"Vraj",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},Welcome to The Website`);
        console.log(this);
    }
}
user.welcomeMessage();
user.username="Sam";
user.welcomeMessage();
console.log(this);

// function chai(){
//     let username="Vraj";
//     console.log(this.username); //This Not Working On Functions
// }
// chai()

const chai=()=>{
   let username="Vraj";
   console.log(this);
}
chai();


const addTwo=(n1,n2)=>{
    return n1+n2;
}
// const addTwo=(n1,n2)=> n1+n2;//Implicite Arrow Function
// const addTwo=(n1,n2)=> (n1+n2);  //Withot return value syntax

console.log(addTwo(5,8));

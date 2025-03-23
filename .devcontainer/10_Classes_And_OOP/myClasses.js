// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }
//     encrypassword(){
//         return `${this.password}abc`;
//     }
//     usernameUppercase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// let chai=new User("Vraj","vp@google.com","123");

// console.log(chai.encrypassword());
// console.log(chai.usernameUppercase());

//Behind The Sceen

function User(username,email,password) {
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encrypassword=function(){
    return `${this.password}abc`;
}
User.prototype.usernameUppercase=function(){
    return `${this.username.toUpperCase()}`
}

let tea=new User("tea","tea@google.com","123");

console.log(tea.encrypassword());
console.log(tea.usernameUppercase());

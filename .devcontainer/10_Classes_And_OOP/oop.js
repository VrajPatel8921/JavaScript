let user={
    username:"Vraj",
    loginCount:8,
    isLoggedIn:true,
    getUserDetails:function(){
        console.log("Gettting USer Details From The DataBase");
        console.log(`username:${this.username}`);
        console.log(this);
    }
}

console.log(user.username);
user.getUserDetails();
console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
    this.greeting=function(){
        console.log(`welcome ${this.username}`);
    }

    

}

let userOne=new User("VP",18,true);
let userTwo=new User("Harry",78,false);

console.log(userOne);
console.log(userTwo);
console.log(userTwo.greeting());
console.log(userTwo.constructor);




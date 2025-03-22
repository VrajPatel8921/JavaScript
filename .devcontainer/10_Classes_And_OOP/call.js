function setUsername(username){
    this.username=username;
    console.log("Called");
    
}

function createUser(username,email,password){
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}

let chai = new createUser("Vraj","vp@gmail.com","123");

console.log(chai);

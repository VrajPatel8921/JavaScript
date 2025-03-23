class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`User Name Is:${this.username}`);
    }

    static createId(){
        return `123`;
    }
}

let vraj=new User("Vraj");
// console.log(vraj.createId());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}

let iphone=new Teacher("Iphone","Ipgone@gmail.com");

iphone.logMe();
console.log(iphone.createId());

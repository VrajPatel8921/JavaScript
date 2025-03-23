class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`User Name Is:${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`A Course Was Added By ${this.username}`);
    }
}

let vraj=new Teacher("Vraj","Vp@Gmail.com","999");
let urvish=new User("Urvish","urvish@gmail.com","566");

vraj.addCourse();
vraj.logMe();
urvish.logMe();
// urvish.addCourse();//This Not Works

console.log(vraj instanceof Teacher);
console.log(vraj instanceof User);
console.log(urvish instanceof Teacher);
console.log(urvish instanceof User);
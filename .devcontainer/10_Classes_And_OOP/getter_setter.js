class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(email){
        this._email=email;
    }

    get password(){
        return this._password.toUpperCase();
    }
    set password(password){
        this._password=password;
    }
}

let vraj=new User("Vraj",'12354');
console.log(vraj.password);
console.log(vraj.email);
vraj._email='Vp@gm.com';
vraj._password='HelloVraj';
console.log(vraj.password);
console.log(vraj.email);
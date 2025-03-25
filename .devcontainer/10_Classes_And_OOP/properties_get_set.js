function User(email,password){
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"email",{
        get:function(){
            return this._email.toUpperCase();
        },
        set:function(email){
            this._email=email;
        }
    })
}

let vraj=new User("Vraj","Patel");
console.log(vraj.email);
console.log(vraj._password);


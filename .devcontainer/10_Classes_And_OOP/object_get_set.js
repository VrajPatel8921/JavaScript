let User={
    _email:"vp@vp.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email=value;
    }
}

let tea =Object.create(User);

console.log(tea.email);



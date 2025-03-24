class React{
    constructor(){
        this.library="React",
        this.server="https://localhost:3300";

        document.querySelector('button').addEventListener('click',this.handleClick.bind(this))
    }
    handleClick(){
        console.log("Button Clicked");
        console.log(this);
    }
}

let app=new React();
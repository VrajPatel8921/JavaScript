let a = 15;

if (true) {
    let a = 10;
    const b = 200;
    // var c = 300;
    console.log("Innet a:" + a);
}

console.log(a);
// // console.log(b);
// // console.log(c);

//FOr Nested Scoop

function one(){
    let userName="Vraj";
    function two(){
        let website="YOutube";
        console.log(userName);
    }
    // console.log(website);
    two();
}
one();

if(true){
    let username="Vraj ";
    if(true){
        let website="Youtube ";
        console.log(username + website);
    }
    // console.log(website);
    
}

//++++++++++++++++++ INtresting +++++++++++++++++++

console.log(addOne(5));
function addOne(num){
    return num+1;
}

// console.log(addTwo(10)); //This Wil Not Wok
const addTwo=function(num){
    return num+2;
}
console.log(addTwo(10));


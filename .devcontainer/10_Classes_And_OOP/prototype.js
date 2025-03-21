


let myHeros=["Thor","SpiderMan"];

let heroPower={
    thor:"Hammer",
    Spiderman:"Sling",
    getSpiderPower:function(){
        console.log(`Spider Power Is:${this.Spiderman}`);
    }
}

Object.prototype.hitesh=function() {
    console.log(`Hitesh is PResent In All Objects`);
}

Array.prototype.heyHitesh=function(){
    console.log("Hey Hitesh");
}

myHeros.hitesh();
heroPower.hitesh();
myHeros.heyHitesh();
// heroPower.heyHitesh();


//Inharitance
let user={
    userName:"Chai",
    email:"Chail@google.com"
}

let Teacher={
    makeVideos:true
}

let TeachingSupport={
    isAvailable:false
}

let TAsupport={
    makeAssignment:"Js Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user;

// Morden Inharitance Syntax

Object.setPrototypeOf(TeachingSupport,Teacher);

console.log(TeachingSupport.makeVideos);

//MAking Custom Proto Type
let anotherUserName="Vraj     ";

//TRue Length Method
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Legth is:${this.trim().length}`);
}

//True Length Property
Object.defineProperty(String.prototype, "TrueLengthMethod", {
    get: function(){
        console.log(`${this}`);
        console.log(`True Legth is:${this.trim().length}`);
    }
  });



anotherUserName.trueLength();
"HEllo Vraj Patel   ".trueLength();
anotherUserName.TrueLengthMethod







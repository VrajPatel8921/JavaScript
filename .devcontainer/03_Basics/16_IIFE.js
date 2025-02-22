//Imeediately Invoke Function Expressions(IIFE)

(function chai(){
    console.log("Chai");
})();

(()=>{
    console.log("DB Connected Two");
})();

((name)=>{
    console.log(`DB Connected Two ${name}`);
})("Vraj");
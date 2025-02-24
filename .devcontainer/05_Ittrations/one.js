// for(let i=0;i<=10;i++){
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table Of ${i}`);
//     for (let j = 0; j <=10; j++) {
//         console.log(`${i}X${j}=${i*j}`);
//     }
    
// }

//For Arry
let myArray=["Flash","Batman","Supperman"];

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

//Break And Continue
for (let index = 1; index <= 10; index++) {
    if(index==5){
        console.log(`Detected 5`);
        break;
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 10; index++) {
    if(index==5){
        console.log(`Detected 5`);
        continue;
    }
    console.log(`Value of i is ${index}`);
    
}

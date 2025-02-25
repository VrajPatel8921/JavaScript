let myObject={
    game1:"Mario",
    game2:"SPiderman",
    game3:"Iron-Man"
}

for (const key in myObject) {
    console.log(`${key}:->${myObject[key]}`);
}

let arr=["JavaScript","rb","python","java","C++"];

for (const key in arr) {
    console.log(arr[key]);//In For In Loop Arry Type IS Used
    
}

//Map IS NOt Working iN For In Loop

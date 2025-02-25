//For Of

let arr=[1,2,3,4,5];
for (let i of arr) {
    // console.log(i);
    
}

let Greeting="Hello Vraj";
for(let Great of Greeting){
    if(Great==" "){
        continue;
    }
    // console.log(Great);
}

let map=new Map();//Map is Use To Prints Unique Values In Key Value Pairs
map.set('IND','India');
map.set('USA',"United States Of America");
map.set('PAK',"PAkistan");

console.log(map);

for (const [key,value] of map) {
    console.log(key +":->" +value);
}

let myObject={
    game1:"Mario",
    game2:"SPiderman",
    game3:"Iron-Man"
}
//Object IS Not Ittratable In For Of Loop
// for (const [key,value] of myObject) {
//     console.log(key +":->" +value);
// }


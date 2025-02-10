let marvel_heros=["Thor","Ironman","Spiderman"];
let dc_heros=["Superman","Flash","Batman"];
// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// let allHeros=dc_heros.concat(marvel_heros);
// console.log(allHeros);

let allNewHeros=[...marvel_heros,...dc_heros];
console.log(allNewHeros);

let anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

let realAnotherArray=anotherArray.flat(Infinity);
console.log(realAnotherArray);

console.log(Array.isArray("Vraj"));
console.log(Array.from("Vraj"));
console.log(Array.from({name:"Vraj"}));//Intresting Point 

let Score1=100;
let Score2=200;
let Score3=300;

console.log(Array.of(Score1,Score2,Score3));
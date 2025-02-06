let name="Vraj";
let repoCount=50;

console.log(`Hello My Name Is ${name} And My Repo Count Is:${repoCount}`);

let gameName=new String("Mario-Pokemon-GTA");
console.log(gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

let newSring=gameName.substring(0,4);
console.log(newSring);

let newStringTwo="     Hello.fee df  ";
console.log(newStringTwo);
console.log(newStringTwo.trim());

let url="https://chaiaurcode%20learning";
console.log(url.replace("%20","-"));

console.log(url.includes("chai"));

console.log(gameName.split("-"));

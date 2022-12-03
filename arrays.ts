let Students = ["J&J","pfizer","Sputnik"];
console.log(`Given Array:${Students}`);
//array destructuring
let [First, Second, Third, Forth = "Covaxin"] = Students;
console.log(First);
console.log(Second);

console.log(Third);
console.log(Forth);

//traverse for of loop is used
console.log("trverse array======>>");

for (const i of Students) {
 console.log(i);
    
}
var math = parseInt(prompt("Maths Score:"));
var physics = parseInt(prompt("Physics Score:"));
var chem = parseInt(prompt("Chemestry Score:"));

console.log('Maths Marks:', math);
console.log('Physics Marks:', physics);
console.log('Chemistry Marks:', chem);


var add = math + physics + chem;

var avrage = add / 3;
console.log(`Average is:${avrage}`);
if (avrage < 70) {
    console.log("Grade c");
}
else if (avrage > 70 && avrage < 90) {
    console.log("Grade B");

}
else if (avrage > 90) {
    console.log("Grade A");

}



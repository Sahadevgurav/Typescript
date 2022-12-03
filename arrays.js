var Students = ["J&J", "pfizer", "Sputnik"];
console.log("Given Array:".concat(Students));
//array destructuring
var First = Students[0], Second = Students[1], Third = Students[2], _a = Students[3], Forth = _a === void 0 ? "Covaxin" : _a;
console.log(First);
console.log(Second);
console.log(Third);
console.log(Forth);
//traverse for of loop is used
console.log("trverse array======>>");
for (var _i = 0, Students_1 = Students; _i < Students_1.length; _i++) {
    var i = Students_1[_i];
    console.log(i);
}

var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, frequentlyFlyerno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentlyFlyerno = this.frequentlyFlyerno;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentlyFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparrow", 123);
var passenger1 = new Passenger("Harrey", "Potter", 134);
passenger.display();
// for (let key in Passenger) {
//   if(key !=="display"){
//     console.log(key);
//     console.log(Passenger[key]);  
//   }
// }
for (var item in Passenger) {
    if (Passenger[item] instanceof Function) {
    }
}

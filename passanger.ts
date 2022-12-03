class Passenger {
    firstName:string;
    lastName:string;
    frequentlyFlyerno:number;
    constructor(firstName: string,lastName:string,frequentlyFlyerno:number)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.frequentlyFlyerno=this.frequentlyFlyerno;
    }
    display() {
        console.log(this.firstName + " " + this.lastName + " "+ this.frequentlyFlyerno);
    }

}

var passenger = new Passenger("Jack","Sparrow",123);
var passenger1 = new Passenger("Harrey","Potter",134);
passenger.display();

// for (let key in Passenger) {
//   if(key !=="display"){
//     console.log(key);
//     console.log(Passenger[key]);  
//   }
// }

for (let item in Passenger) {
   if (Passenger[item]instanceof Function) {
    
   }
}



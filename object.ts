var emp = {
    name: "Dnyanesh",
    score: 250
}


for(var e in emp)
{
   console.log(e);
   console.log(emp[e]);
}


var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}


var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var {firstName: userFirstname, lastName: userLastName} = std;

console.log(userFirstname);
console.log(userLastName);


function display(id:number, name:string, role?:string) 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
        console.log("Role", role);
    }
    
}

display(1, "Dnyanesh", "Admin");
display(1, "Dnyanesh");

interface Ipassenger {
    Name:string;
    Email:string;
    Phone:number
}

interface IPassAddress {
  Address?:string;
  City:string;
  Pin:number
}

interface Ihotel extends Ipassenger , IPassAddress {
 RoomType:string;
 NoRoom:number;
 NoGuests:number;
 date:string;
 display():void
}

var Hotel: Ihotel = {
  RoomType:"AC",
  NoRoom:123,
  NoGuests:1,
  date:"17-8-2022",
  Name:"sdev",
  Email:"sahadevgurav@gmail.com",
  Phone:1234567890,
  City:"pune",
  Pin:1234567,
  display():void {
      console.log(this.RoomType+ " " +this.NoRoom+ " "+ this.NoGuests + " " +this.date+ " "
      + this.Name+" "+this.Email +" "+ this.Phone+ " "+ this.City + " "+this.Pin);  
  }
}
Hotel.display();
console.log(Hotel);


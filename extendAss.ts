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
  Name:"Raj",
  Email:"raj@123gmail.com",
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
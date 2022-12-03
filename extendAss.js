var Hotel = {
    RoomType: "AC",
    NoRoom: 123,
    NoGuests: 1,
    date: "17-8-2022",
    Name: "Raj",
    Email: "raj@123gmail.com",
    Phone: 1234567890,
    City: "pune",
    Pin: 1234567,
    display: function () {
        console.log(this.RoomType + " " + this.NoRoom + " " + this.NoGuests + " " + this.date + " "
            + this.Name + " " + this.Email + " " + this.Phone + " " + this.City + " " + this.Pin);
    }
};
Hotel.display();
console.log(Hotel);

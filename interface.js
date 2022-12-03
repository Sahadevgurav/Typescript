var objProduct = {
    id: 123,
    name: "Iphone",
    description: "It`s awesome",
    price: 60000 //I have given implementation for IProduct interface
    ,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
var objPhone = {
    id: 345,
    name: "Samsung",
    description: "It is Trust",
    price: 23000,
    display: function () {
        console.log(this.id + " " + this.name);
    }
};
objPhone.display();

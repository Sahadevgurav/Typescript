interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number //declaration only in interface.
    display(): void;
}

var objProduct: IProduct = {
    id: 123
    name: "Iphone",
    description: "It`s awesome",
    price: 60000 //I have given implementation for IProduct interface
    display(): void {
        console.log(this.id + " " + this.name);

    }

}

var objPhone:IProduct={
    id:345,
    name:"Samsung",
    description:"It is Trust",
    price:23000,
    display():void{
        console.log(this.id + " " + this.name); 
    }
}
objPhone.display();

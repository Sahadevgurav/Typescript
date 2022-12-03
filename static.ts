class Check {
    static banknme:string ="Bank of India";
    customerName:string;
    accNO:number;

    display(){
        // Check.banknme="BOB";
        console.log(Check.banknme);
        
    }
}

var objCheck=new Check();
var bankName=Check.banknme;
objCheck.display();
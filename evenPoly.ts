class MainOrganizer {
    public id:number;
    public name:string;
   public description:string;
   public Starttime:string;
   public address:string;
   public display():void{

   }
}

class Organizer extends MainOrganizer {

    constructor (id:number,name:string) {
        super();
        this.id=id;
        this.name=name;
      }
   public display():void{  
    console.log(` Organizer Id:${this.id}\n Organizer Name:${this.name}`);  
    console.log(`----------------------------------`);
      }
}

class Event1 extends MainOrganizer {
    constructor (id:number,name:string,description:string,Starttime:string) {
      super();
      this.id=id;
      this.name=name;
      this.description=description;
      this.Starttime=Starttime
    }
    public display(): void {
        super.display();
        console.log(` Event Id : ${this.id}\n Event Name: ${this.name}\n Event Description: ${this.description}\n Event Starttime: ${this.Starttime}`);
        console.log(`---------------------------------`);
        
    }
}

class Venue extends MainOrganizer {
    constructor (id:number,name:string,description:string,address:string) {
      super();
      this.id=id;
      this.name=name;
      this.description=description;
      this.address=address
    }
    public display(): void {
        super.display();
        console.log(` Venue Id : ${this.id}\n Venue Name: ${this.name}\n Venue Description: ${this.description}\n Venue Address: ${this.address}`);
        
    }
}

const org:MainOrganizer[]=new Array(new Organizer(10,"Raj"),new Event1(20,"Seminar","Trading Seminar","20 Nov 2022  04-PM") , new Venue(30,"Pingale Sanai Hall"," Opp CANARA BANK - PUNE KOREGAON PARK","Pune"))

for (const no of org) {
    no.display();
}
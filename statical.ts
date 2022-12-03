class Calcuator{
    // static num1:number;
    // static num2:number;
   static add(num1,num2){
        console.log(`Addition of ${num1} and ${num2}  is = ${num1+num2}`);
    }
   static sub(num1,num2){
        console.log(`Subtraction of ${num1} and ${num2}  is = ${num1-num2}`);
    }
   static multi(num1,num2){
        console.log(`Multiplication of ${num1} and ${num2}  is = ${num1*num2}`);
    }
   static div(num1,num2){
        console.log(`Division of ${num1} and ${num2}  is = ${num1/num2}`);
    }
}
console.log(`----------Calculator using Static method--------`);

Calcuator.add(10,20);
Calcuator.sub(40,30);
Calcuator.multi(2,5);
Calcuator.div(100,10);

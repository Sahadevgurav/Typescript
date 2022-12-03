var Calcuator = /** @class */ (function () {
    function Calcuator() {
    }
    // static num1:number;
    // static num2:number;
    Calcuator.add = function (num1, num2) {
        console.log("Addition of ".concat(num1, " and ").concat(num2, "  is = ").concat(num1 + num2));
    };
    Calcuator.sub = function (num1, num2) {
        console.log("Subtraction of ".concat(num1, " and ").concat(num2, "  is = ").concat(num1 - num2));
    };
    Calcuator.multi = function (num1, num2) {
        console.log("Multiplication of ".concat(num1, " and ").concat(num2, "  is = ").concat(num1 * num2));
    };
    Calcuator.div = function (num1, num2) {
        console.log("Division of ".concat(num1, " and ").concat(num2, "  is = ").concat(num1 / num2));
    };
    return Calcuator;
}());
console.log("----------Calculator using Static method--------");
Calcuator.add(10, 20);
Calcuator.sub(40, 30);
Calcuator.multi(2, 5);
Calcuator.div(100, 10);

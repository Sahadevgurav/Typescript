var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        // Check.banknme="BOB";
        console.log(Check.banknme);
    };
    Check.banknme = "Bank of India";
    return Check;
}());
var objCheck = new Check();
var bankName = Check.banknme;
objCheck.display();

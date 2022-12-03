var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainOrganizer = /** @class */ (function () {
    function MainOrganizer() {
    }
    MainOrganizer.prototype.display = function () {
    };
    return MainOrganizer;
}());
var Organizer = /** @class */ (function (_super) {
    __extends(Organizer, _super);
    function Organizer(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Organizer.prototype.display = function () {
        console.log(" Organizer Id:".concat(this.id, "\n Organizer Name:").concat(this.name));
        console.log("----------------------------------");
    };
    return Organizer;
}(MainOrganizer));
var Event1 = /** @class */ (function (_super) {
    __extends(Event1, _super);
    function Event1(id, name, description, Starttime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.Starttime = Starttime;
        return _this;
    }
    Event1.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" Event Id : ".concat(this.id, "\n Event Name: ").concat(this.name, "\n Event Description: ").concat(this.description, "\n Event Starttime: ").concat(this.Starttime));
        console.log("---------------------------------");
    };
    return Event1;
}(MainOrganizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log(" Venue Id : ".concat(this.id, "\n Venue Name: ").concat(this.name, "\n Venue Description: ").concat(this.description, "\n Venue Address: ").concat(this.address));
    };
    return Venue;
}(MainOrganizer));
var org = new Array(new Organizer(10, "Raj"), new Event1(20, "Seminar", "Trading Seminar", "20 Nov 2022  04-PM"), new Venue(30, "Pingale Sanai Hall", " Opp CANARA BANK - PUNE KOREGAON PARK", "Pune"));
for (var _i = 0, org_1 = org; _i < org_1.length; _i++) {
    var no = org_1[_i];
    no.display();
}

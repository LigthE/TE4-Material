console.log("hello TS");
//!strings
var firstname = "tony";
firstname = "soprano";
var age = 42;
var greeting = "hello  ".concat(firstname, " you are ").concat(age, " years old");
console.log(greeting);
//!numbers
var priceFromDB = "289";
var personsAge2 = 28;
var price = 49.5;
var hexvalue = 0xff;
var itemQuantity = 5;
var totalCost = itemQuantity * price * Number(priceFromDB);
console.log(totalCost);
//!booleans
var isLoggedIn = true;
var isError = false;
var isLoading = true;
//!arrays
var users = ["erkan", "axel", "panes"];
var points = [10, 20, 30];
var p1 = {
    x: 10,
    y: 20,
    label: "start point",
};
console.log(p1);
var primaryColor = [255, 0, 255]; /*rgb här skriv bara 3 styckna saker */
//! enums
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var PlayerDirection = Direction.Up;
if (PlayerDirection === Direction.Up) {
    console.log("Moving ".concat(PlayerDirection));
}
//! null
var studentName = null;
studentName = "manhal";
studentName = null;
//! functions
var logMessage = function (name) {
    var message = "hello my name is ".concat(name);
    console.log(message);
    return;
};
logMessage("Erkan");
var calculateArea = function (length, width) {
    return length * width;
};
console.log(calculateArea(3, 100));
//!unknown
var data = "person name";
if (typeof data === "string")
    console.log(data.toUpperCase());
if (typeof data === "number")
    console.log(data + 50);
//! union - types
var userId = null;
userId = 9482;
userId = "22830";
//userId = false
var showUserId = function (id) {
    if (typeof id === "number") {
        console.log(id.toFixed());
    }
    else {
        console.log(id.toUpperCase());
    }
};
showUserId(userId);

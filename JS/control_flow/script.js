"use strict";

console.log("Hello, World!");

let age = 18;
let HasaTicket = true;

if (age > 18 && HasaTicket) {
  console.log("welcome to the party");
} else if (!HasaTicket && age > 18)
  console.log("Leave, You have no ticket and your underage");
else {
  console.log("bye bye kid");
}

//traffic light

let color = "yellow";

switch (color) {
  case "green":
    console.log("drive");
    break;
  case "yellow":
    console.log("Pay attention");
    break;
  case "red":
    console.log("stop");
    break;
  default:
    console.log("Check for väjningsplikt or stoppskylt");
}
// exercise 1
let number = 10;
let guess = 10;

if (number === guess) {
  console.log("correct!");
} else if (guess < number) {
  console.log("wrong guess (LOW)");
} else if (guess > number) {
  console.log("Too high");
} else {
  console.log("Invalid");
}
// exercise 2

let total = 100;
//total 100 is how much coustomer needs to spend so he can get discount.
let Coustomer = 20;
// i wrote let coustomer = 20 because its how much he spends and if he spends more than 100 he will get 20% discount.

if (total >= 20) {
  console.log("Discount 20%");
} else if (total > 50 && total < 99) {
  console.log("10 % doscount");
} else if (total < 50) {
  console.log("no discount");
}

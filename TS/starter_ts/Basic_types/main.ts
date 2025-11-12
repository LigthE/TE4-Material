console.log("hello TS");

//!strings
let firstname: string = "tony";
firstname = "soprano";
let age = 42;
let greeting: string = `hello  ${firstname} you are ${age} years old`;

console.log(greeting);

//!numbers
const priceFromDB = "289";
let personsAge2: number = 28;
let price: number = 49.5;
let hexvalue: number = 0xff;
let itemQuantity: number = 5;

let totalCost: number = itemQuantity * price * Number(priceFromDB);

console.log(totalCost);

//!booleans

let isLoggedIn: boolean = true;
let isError: boolean = false;
let isLoading: boolean = true;

//!arrays

let users: string[] = ["erkan", "axel", "panes"];
let points: number[] = [10, 20, 30];

//!objects

type Point = {
  x: number;
  y: number;
  label: string;
};

let p1: Point = {
  x: 10,
  y: 20,
  label: "start point",
};

console.log(p1);

//! tuples

type RGB = [number, number, number];
let primaryColor: RGB = [255, 0, 255]; /*rgb här skriv bara 3 styckna saker */

//! enums

enum Direction {
  Up,
  Down,
  Left,
  Right,
}
let PlayerDirection: Direction = Direction.Up;
if (PlayerDirection === Direction.Up) {
  console.log(`Moving ${PlayerDirection}`);
}

//! null

let studentName: string | null = null;

studentName = "manhal";
studentName = null;

//! functions

const logMessage = (name: string): void => {
  const message = `hello my name is ${name}`;
  console.log(message);
  return;
};

logMessage("Erkan");

const calculateArea = (length: number, width: number): number => {
  return length * width;
};

console.log(calculateArea(3, 100));

//!unknown
let data: unknown = "person name";

if (typeof data === "string") console.log(data.toUpperCase());
if (typeof data === "number") console.log(data + 50);

//! union - types
let userId: string | number | null = null;
userId = 9482;
userId = "22830";
//userId = false

const showUserId = (id: number | string): void => {
  if (typeof id === "number") {
    console.log(id.toFixed());
  } else {
    console.log(id.toUpperCase());
  }
};

showUserId(userId);

//task 1
//1
const anvandarNamn: string = "erkan";

//2
let highScore: number = 100;

//3
let IsLoggedIn: boolean = false;
//4
let countdown: number | null = 10;

//tas 2
//1
const GameTags: string[] = ["Drama", "Horror", "Action"];
//2
const Score: boolean | number = 100;

//3

//4

//task 3

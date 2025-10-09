for (let i = 1; i <= 5; i++) {
  console.log(`ìteration number ${i}`);
}

// while loop
let count = 1;
while (count <= 20) {
  console.log("the count is ${count}");
}

let number = 1;
do {
  console.log(`code will run at least once ${number}`);
} while (number < 6);

// for of loop
const items = ["mango", "peach", "banana", "grape"];
for (const item of items) console.log("my favorite fruit is ${item}");

//task excersise
for (let number = 1; 1 < 10; number++);
console.log("number is ${number}");

let sum = null;
let numbers = 1;

do {
  sum = sum + numbers;
  console.log("sum is ${sum}");
} while (sum <= 20);

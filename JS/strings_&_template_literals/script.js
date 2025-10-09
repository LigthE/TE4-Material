console.log("Hello, World!");

const name = "Alice Rivers ";
const surname = "Alothman";
let age = 30;
const city = " 'Wonderland' ";

// const greeting = "My name is " + name + ", I am " + age + "years old" + " and I live in " + city;
const greeting = `   My name is ${name + surname}, I am ${age + 1} year old, and I live in ${city}`;
console.log(greeting.length);
console.log(greeting.toUpperCase());
console.log(greeting.trim());
console.log(greeting.includes("Alothman"));
console.log(greeting.replace("Alothman", "Issa"));
console.log(greeting.slice(2, 20).split(" "));

const quote = "There's no day like tomorrow!";
console.log(quote.length);

const day = 16;
const month = "September";
const year = 2025;

console.log(`Today is the ${day + 1}th of ${month}, in the year ${year + 1}`);

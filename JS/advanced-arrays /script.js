console.log("Hello, World!");

const arr1 = [1, 2];
const arr2 = [3, 4];
const ihop = [...arr1, ...arr2];
console.log(ihop);

//array   .map will loop through every number in nums and will run n*2 for each number
//alltså gånger 2 på alla nummer i en map t.ex [1,2,3 ]
//du får tillbaka 2,4,6 men du får beroende på vad du vill ha

for (let i = 0; i < ihop.length; i++) {
  console.log(ihop[i] * i);
}

for (const item of ihop) {
  console.log(item);
}

//.foreach()
//array   .map will loop through every number in nums and will run n*2 for each number
//alltså gånger 2 på alla nummer i en map t.ex [1,2,3 ]

const MultipleNumbers = ihop.map((Number, index) => Number * index);
console.log(MultipleNumbers);
const tripleNumbers = ihop.forEach((Number) => Number * 3);
console.log(tripleNumbers);

MultipleNumbers.forEach((Number) => console.log(Number));
arr1.forEach((Number, i) => console.log(Number * i));

const totals = [20, 35, 1];
const totalPayable = totals.reduce((total, nextItem) => total + nextItem, 0);
console.log(totalPayable);

//multidomentional arrays

const tripelArr = [
  [1, 2, 3][(4, 5, 6)],
  //[7, 8, 9]
];
//console.log(tripelArr[1].flatMap((item) => item));
//1a1b
const array1 = ["Borat", "Scarface", "Sopranos", "BreakingB", "Dexter"];
console.log(array1[1]);
array1.push("BetterCSaul");
array1.shift();
console.log(array1);

//2a2b

const arrayi = [1, 2, 3, 4, 5];
const squared = arrayi.map((num) => num ** 2);
console.log(squared);
const oddnum = squared.filter((num) => num % 2 === 1);
console.log(oddnum);

//3a3b

const Tictac = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(Tictac[1][1]);

const given = [10, 20, 30, 40, 50];
const x = given.reduce((given, xItem) => given + xItem, 0);
console.log(x);

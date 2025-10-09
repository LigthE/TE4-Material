//arrays//use this brackets [ ] option 8 and not curly bracket
//arrays are objects
//fruits.push // .push is a function
//exercise 1

const colors = ["Blue", "Pink", "Yellow"];

colors.push(`pink`);
console.log(colors);
colors.shift([0]); //colors.shift([0]) is used and 0 is blue because its first in the list
//it takes blue out and lets  pink in first place
//colors.push makes green tha last one in the colors cart.
console.log(colors);

const numbers = ["10", "20", "30", "40", "50"];
numbers.splice(2, 1, 99);
console.log(numbers); //shopping cart

const shopping = ["milk", "Apple", "Drink", "Juice", "Tomatoes"];

shopping.splice(2, 1);
console.log(shopping);
console.log(shopping.includes("milk"));
// shopping.includes "includes checks if milk in the shopping cart"
//shopping.splce 0 is milk the first one and 1 is apple now drink is 2
//and 2, 1 the 1 is drink now if i put 2 then it would take away juice too
//thats why 1 is put there so it only takes out the thing u want to take out,

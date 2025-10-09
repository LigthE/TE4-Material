//function square(x) {
//return x * x;
//}
// koden längst up jag ska göra den till en arrow

//Arrow function 1
const square = (x) => x * x;

//constant square är lika med x och x är lika mer och större än x gånger x
//en array är
//men man kan också sätta ( ) domhär tecken om du bara referar till 1 x¨

//callback 2

function doHomework(repair, callback) {
  console.log(`${repair}  my car now theres no rust left`);
  callback(repair);
}

function repair() {
  console.log(`repaired baby`); //jag kör en callback repair funktion
} //för att berrätta att min bil e fixad från rost

doHomework(`no f*** i have to fix the rust under my car`, repair);
// jag använde doHomework här nere för att annars mina koder kom ut som spagetti på console.loggen
// körde repair på slutet här för att det ska köra den parametern efter

// DEFAULT PARAMS 3
function Multiply(a, b = 1) {
  return a * b;
  // funktion multiplerar a och b men med bara 1
  // b är lika en 1 därför det räcker med console.log(multiply(29))
  //men dethär är med bara 1 argument man kallar bara 1
} // men nu jag lägger till * bredvid 29 osen lägger till 20 då multiplcerar vi bara 1 gång
// om man ändrar b= 2 då man multiplicerar 29 * 20 = 580 * 2

console.log(Multiply(29 * 20));

//Rest Operator 4

function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log(findMax(10, 20, 39, 69, 10));
// ...numbers  collects all arguments passed to the function into a single array.
// math.max returnerar den största nummern men den funkar inte för arrays

// spread operator 5

const array1 = [1, 2];
const array2 = [3, 4];
const merged = [...array1, ...array2];
console.log(merged);

//When used inside an array literal ([...]), the three dots are the spread operator.
//It takes each element out of the array and spreads them into individual items.
// it takes arrays and changes them to elements

console.log("hello world!");
//teacher example
//summerar a och b
// nu med hjälp av console.log och ( 10,10) så är a och b värd 10 varsin och 20 sammanlagt
//för att man skriver sum och då tar koden a och b från sum  den vet att man ska föra + för att vi
// har bett om det med en =>

const sum = (a, b) => {
  return a + b;
};
console.log(sum(10, 10));

const welcome = (name = "guest") => console.log(`welcome to dashboard ${name}`);

welcome();
welcome("erkan");

const isLoggedIn = true;
const userNaME = "ERKAN akdag";

// console.log("hello kitty");

// const global = "joking im scoped";
// const repeatVar = () => {
//   const scoped = "im a scoped variable";
//   console.log(scoped);
// };

// repeatVar();

// if (true) {
//   var variableVar = "im a var ";
//   console.log(variableVar);
// }

// console.log(variableVar);

// const outer = () => {
//   let counter = 9; // it will display 1 number higher because it counts 0 as a 1

//   const inner = () => {
//     counter++;
//     console.log(counter);
//   };
//   return inner;
// };
// outer();
// const count = outer();
// {
//   count();
// }

//första upgift 1
function makeMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = makeMultiplier(2);
console.log(double(10));

{
  // 2 upgift
  function outer() {
    let counter = 0;
    function inner() {
      counter++;
      console.log(counter);
    }
    inner.reset = function () {
      counter = 0;
      console.log(counter);
    };
    return inner;
  }

  const count = outer();
  count();
  count();
  count();
  count.reset();
}

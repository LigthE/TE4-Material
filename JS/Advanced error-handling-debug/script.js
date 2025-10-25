console.log("Hello, World!");

/*test
const divide = (a, b) => {
  if (b === 0) throw new error("numbers cannot be divided by 0");
  console.log(a / b);
};

divide(20, 8);
*/

//A1 A2 // C

const multiplied = (a, b) => {
  try {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers allowed other input = DEATH SENTANCE");
    }
    return a * b;
  } catch (error) {
    console.error("BRO! something went wrong", error.message);
  } finally {
    console.log("operation finnished checking user");
  }
};
const GetUserAge = {
  user: "erkan",
  age: 18, ///frank remove this line when trying my error code ok
};
if (typeof GetUserAge.age !== "number")
  throw new Error("You need to put your age");
console.log(multiplied(10, 2));
console.log(GetUserAge);

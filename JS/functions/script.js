// * functions //*hoisting

function greet(name, age) {
  return `hello, my name is ${name} i am ${age} years old`;
}

console.log(greet("erkan Akdag", 18));

//*not hoisted
const add = function (a, b) {
  return a + b;
};
console.log(6 + 2);

//* calculare Bmi / name , weight, height

const calculateBmi = function (Name, weight, height) {
  return Name + weight + height;
};
//console.log("Erkan akdag", Name + weight + height);

//default parameters

const calculateAge = (birthYear, thisYear = 2025) => {
  const age = thisYear - birthYear;
  console.log(age);
};

calculateAge(1990, 2030);

//early returns

const ShowTemp = (temp = 10) => {
  if (temp < 0) return `freezing `;
  if (temp < 20) return `cool`;
  if (temp > 20 && temp < 32) return `warm broo`;
  return `hot fireee`;
};

console.log(ShowTemp());

// calculater of grade and score
const calculateGrade = (Name, Grade) => {
  if (`Grade < 100 && grade 90`) {
    return `${Name} got A and score of ${Grade}`;
  }
  if (`Grade < 89 && grade 80`) {
  }
};
console.log(calculateGrade("Erkan", 95));

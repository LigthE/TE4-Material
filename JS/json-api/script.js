//test //

"use strict";
console.log("Hello, World!");

//display data in the DOM
const postList = document.getElementById("posts");
//async stuff
const fetchPosts = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();
  console.log(data);

  data.forEach((item) => {
    const listItem = document.createElement("li");
    const postHeading = document.createElement("h2");
    const postBody = document.createElement("p");
    postTitle.textContent = item.title;
    postBody.textContent = item.body;
    postHeading.textContent = item.Heading;

    listItem.textContent = `${item.title} - ${item.body}`;
  });
};

/*parse
const jsonString = '{"name": "Alice", "age": 25, "school": "NTI Soödertörn"}';
localStorage.setItem("person", jsonString);

const dataFromLocalStorage = localStorage.getItem("person ");
const parsedJson = JSON.parse(dataFromLocalStorage);

console.log(parsedJson);

// stringfy//

const classObj = {
  name: "TE4",
  course: "javascript",
  students: [
    {
      name: "alice",
      age: "21",
    },
    {
      name: "erkan",
      age: "18",
    },
  ],
};

console.log(classObj);
const jsonClass = JSON.stringify(classObj);
console.log(jsonClass);
*/
// 1a konvertera till objekt
//knoverterar til en object och loggar in studentens namn

const studentJSON = '{"name": "liam", "grade": 4,"passed": true }';

const student = JSON.parse(studentJSON);
console.log(student, "hi", student.name);

//converterar tillbaks till en json string
const studentJson = JSON.stringify(student);
console.log(studentJSON);

const NameList = document.getElementById("List");
const fetchList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
};
// 1 b

async function loadPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json();

  const list = document.getElementById("users-list");
  user.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = `${user.name} - ${user.email}`; //jag visste inte att man kunde använda 1 li.textcontent
    //så jag fråga chatt han sa använd - tecken och lägg till en till curly bracket.
    list.appendChild(li);
  });
}

loadPosts();

// 1 c quotes app  det var för svårt för mig

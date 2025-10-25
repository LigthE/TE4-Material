// console.log("Hello, World!");

// const minmat = ["watermelon", "banana"];
// const stringmat = JSON.stringify(minmat);
// localStorage.setItem("minmat", stringmat);
// console.log(stringmat);

// const session = "test@me.com";
// sessionStorage.setItem =

//console.log("hello world")
//const loggedinuser = {
// name: ""
// Age: ""
// city:""
//}

// const ToggleTheme = () => {
//   const currentTheme = localStorage.getItem("theme");

//   if (currentTheme === "dark") {
//     document.body.classList.remove("dark");
//     localStorage.setItem("theme", "light");
//   } else {
//     document.body.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//   }
// };

// window.addEventListener("load", () => {
//   const theme = localStorage.getItem("theme") === "dark";
//   if (theme === "dark") {
//     document.body.classList.add("dark");
//   }
// });

// const form = document.querySelector("form");
// const input = document.querySelector("#username");

// input.value = sessionStorage.getItem("username") || "";

// input.addEventListener("input", () => {
//   sessionStorage.setItem("username", input.value);
// });

// window.addEventListener("storage", (event) => {
//   console.log("key changed:", event.key);
//   console.log("new value:", event.newValue);
// });

//B
const themeToggle = document.createElement("button"); //i already have a enter button in html called button
document.body.appendChild(themeToggle);
themeToggle.innerText = "toggle dark /ligth theme ";

const newtheme = localStorage.getItem("theme") || "ligth";
document.body.className = newtheme;

themeToggle.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "ligth"; // got little help from ai here on line 71 but
  const newtheme = currentTheme === "dark" ? "ligth" : "dark"; // i understando the code
  document.body.className = newtheme;
  localStorage.setItem("theme", newtheme);
});

//A , 1

// jag gör localstorage.setitem för att skriva in value och key in i storage
//const data localstarge för att skriva in key i storagen
//outputelement för att kunna lägga ut det på hemsidan
/*<p id="output"></p>output id länkar och skickar ut min kods value på hemsidan*/

function renderName() {
  const value = localStorage.getItem("Erkan");
  output.innerText = value ? `Erkan: ${value}` : "No value found";
}

renderName();

localStorage.setItem("Erkan", "18");

const buttonnDelete = document.getElementById("buttonnDelete");
buttonnDelete.addEventListener("click", () => {
  localStorage.removeItem("Erkan");
  renderName();
});

//C

localStorage.setItem("p2");

const Tasks = document.getElementById("p2");
document.body.addEventListener("Click", () => {
  localStorage.clear("p2");
});

// hi frank i cannot do this last one i already nearly possibly died making task B

"use strict";
/* console.log("page loaded!");
const heading = document.querySelector("h1");

async function loadData(id) {
  const [posts, user] = await Promise.race([
    fetch(`put link from slides${id}`).then((res) => res.json()),
    fetch(`put link from slides here${id}`).then((res) => res.json()),
  ]);

  console.log(user, posts);
}

const fetchData = async () => {
  try {
    let responce = await fetch("");
    const data = await responce.json();
    console.log(data.title);
  } catch (error) {
    console.error("something went wrong here", error);
  }
};

function logMessage(message) {
  console.log(message);
}

function fetchData2(callback) {
  setTimeout(() => {
    callback("data recieved");
  }, 2000);
}

fetchData2(logMessage);

console.log("operation finished!");

let Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => console.log("done"));
    reject(() => console.log("error"));
  });
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

  .finnaly(() => {
    console.log("operation completed");
  });
*/

//task 1a 2a

//koden funkade inte jag behövde ta line
// 65 från chat men vet inte varflr det inte fungerade
//när jag skulle skriva kode
async function greetLater() {
  await new Promise((r) => setTimeout(r, 3000));
  console.log("Hello, Async World!");

  let response = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json()),
  ]);
  let data = await response.json();
  console.log(data);
}

greetLater();

//  b1 b2

async function greetLater() {
  await new Promise((r) => setTimeout(r, 3000));
  console.log("Hello, Async World!");

  const [user, posts] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1").then((r) =>
      r.json()
    ),
  ]);
  console.log(user, posts);
}
//async retry
async function fetchRetry(url, tries = 3) {
  for (let i = 0; i < tries; i++)
    try {
      let response = await fetch(url);
      return await response.json();
    } catch {
      console.log(`Try ${i + 1} failed`);
      if (i < tries - 1)
        await new Promise((response) => setTimeout(response, 1000));
    }
}

greetLater();
// c1 c2

async function fetchdata() {
  let start = Date.now();
  const post = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(
    (r) => r.json()
  );
  console.log("Post:", post);

  const comments = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1/comments"
  ).then((r) => r.json());
  console.log("Comments:", comments);

  const [posts, commentsAll, todos] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts").then((r) => r.json()),
    fetch("https://jsonplaceholder.typicode.com/comments").then((r) =>
      r.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/todos").then((r) => r.json()),
  ]);

  console.log("Parallel fetch done!");
  console.log("Posts count:", posts.length);
  console.log("Comments count:", commentsAll.length);
  console.log("Todos count:", todos.length);
}

fetchdata();

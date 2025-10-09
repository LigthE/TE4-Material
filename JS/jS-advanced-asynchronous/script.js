"use strict";
console.log("page loaded!");
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

//task a1

async function greetLater(name, delay) {
  setTimeout(() => {
    const responce = responce.json(`hello ${name}, from async world`);
    console.log(name, delay, responce);
  }, delay);
}
greetLater("erkan", 3000);

// a2

//  b1

// b2

// c1

// c2

"use strict";
const names = ["abc", "bcd", "edf"];

const element = document.querySelector("#result");

// console.log(names);
for (const user of names) {
  // console.log(user);
  const newLi = document.createElement("li");
  newLi.innerHTML = user;
  element.appendChild(newLi);
}
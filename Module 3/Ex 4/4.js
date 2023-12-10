"use strict";
const students = [
  {
    name: "vinh",
    id: "2345768",
  },
  {
    name: "huy",
    id: "2134657",
  },
  {
    name: "mua",
    id: "5423679",
  },
];

const target = document.querySelector("#result");

const addItemToTarget = (obj) => {
  const option = document.createElement("option");
  option.value = `${obj.id}`;
  option.textContent = `${obj.name}`;
  target.appendChild(option);
};

for (let i = 0; i < students.length; i++) {
  addItemToTarget(students[i]);
}
"use strict";

// numbers
let nine = document.querySelector("#nine");
let eight = document.querySelector("#eight");
let seven = document.querySelector("#seven");
let six = document.querySelector("#six");
let five = document.querySelector("#five");
let four = document.querySelector("#four");
let three = document.querySelector("#three");
let two = document.querySelector("#two");
let one = document.querySelector("#one");
let zero = document.querySelector("#zero");
//  actions
let multiply = document.querySelector("#multiply");
let divide = document.querySelector("#divide");
let minus = document.querySelector("#minus");
let add = document.querySelector("#add");
let dot = document.querySelector("#dot");
let equal = document.querySelector(".equal");
let erase = document.querySelector(".delete");

let screen = document.querySelector(".screen");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let action = [];
// actions EventListener
multiply.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("*");
  screen.textContent = "";
});
divide.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("/");
  screen.textContent = "";
});
minus.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("-");
  screen.textContent = "";
});
add.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("+");
  screen.textContent = "";
});
// Equal Button
equal.addEventListener("click", function () {
  let result;
  if (action[1] == "*") {
    result = action[0] * Number(screen.textContent);
  } else if (action[1] == "/") {
    result = action[0] / Number(screen.textContent);
  } else if (action[1] == "-") {
    result = action[0] - Number(screen.textContent);
  } else if (action[1] == "+") {
    result = action[0] + Number(screen.textContent);
  }
  screen.textContent = "";
  screen.append(result);
});

// numbers EventListener
nine.addEventListener("click", function () {
  screen.append(numbers[9]);
});
eight.addEventListener("click", function () {
  screen.append(numbers[8]);
});
seven.addEventListener("click", function () {
  screen.append(numbers[7]);
});
six.addEventListener("click", function () {
  screen.append(numbers[6]);
});
five.addEventListener("click", function () {
  screen.append(numbers[5]);
});
four.addEventListener("click", function () {
  screen.append(numbers[4]);
});
three.addEventListener("click", function () {
  screen.append(numbers[3]);
});
two.addEventListener("click", function () {
  screen.append(numbers[2]);
});
one.addEventListener("click", function () {
  screen.append(numbers[1]);
});
zero.addEventListener("click", function () {
  screen.append(numbers[0]);
});
dot.addEventListener("click", function () {
  screen.append(".");
});
// Delete Button
erase.addEventListener("click", function () {
  screen.innerHTML = " ";
  for (let i = 0; i < 3; i++) {
    action.pop();
  }
});

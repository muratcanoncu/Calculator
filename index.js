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
let deleteAll = document.querySelector(".deleteAll");

let screen = document.querySelector(".screen");
let display = document.querySelector(".display");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function actionListener() {
  action.push(Number(screen.textContent));
  action.push("*");
  screen.textContent = "";
  display.append("*");
}
let action = [];
// actions EventListener
multiply.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("*");
  screen.textContent = "";
  display.append("*");
});
divide.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("/");
  screen.textContent = "";
  display.append("/");
});
minus.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("-");
  screen.textContent = "";
  display.append("-");
});
add.addEventListener("click", function () {
  action.push(Number(screen.textContent));
  action.push("+");
  screen.textContent = "";
  display.append("+");
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
  screen.textContent = " ";
  if (!result) {
    screen.append(" ");
  } else {
    display.textContent = "";
    display.append(`${result},`);
  }
  action = [];
});

// numbers EventListener
nine.addEventListener("click", function () {
  screen.append(numbers[9]);
  display.append(numbers[9]);
});
eight.addEventListener("click", function () {
  screen.append(numbers[8]);
  display.append(numbers[8]);
});
seven.addEventListener("click", function () {
  screen.append(numbers[7]);
  display.append(numbers[7]);
});
six.addEventListener("click", function () {
  screen.append(numbers[6]);
  display.append(numbers[6]);
});
five.addEventListener("click", function () {
  screen.append(numbers[5]);
  display.append(numbers[5]);
});
four.addEventListener("click", function () {
  screen.append(numbers[4]);
  display.append(numbers[4]);
});
three.addEventListener("click", function () {
  screen.append(numbers[3]);
  display.append(numbers[3]);
});
two.addEventListener("click", function () {
  screen.append(numbers[2]);
  display.append(numbers[2]);
});
one.addEventListener("click", function () {
  screen.append(numbers[1]);
  display.append(numbers[1]);
});
zero.addEventListener("click", function () {
  screen.append(numbers[0]);
  display.append(numbers[0]);
});
dot.addEventListener("click", function () {
  screen.append(".");
  display.append(".");
});
// Delete Button
erase.addEventListener("click", function () {
  screen.innerHTML = " ";

  for (let i = 0; i < 3; i++) {
    action.pop();
  }
});
deleteAll.addEventListener("click", function () {
  screen.innerHTML = " ";
  display.innerHTML = " ";
  action = [];
});

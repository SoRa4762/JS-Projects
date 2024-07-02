// //Q1. add 2 numbers
// function sumNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(sumNumbers(50, 60));

// //array loop
// // for (let i = 0; i < 10; i++) {
// //   console.log(i);
// // }

// const array = ["a", "b", "c", "d", 5, 6, 7, 8, 9, 10];
// for (i of array) {
//   console.log(i);
// }

// for (i in array) {
//   console.log(i);
// }

// console.log(array[5]);

// console.log(array.toString());

// for (j of array.toString()) {
//   console.log(typeof j);
// }

// const nestedArray = [
//   1,
//   2,
//   3,
//   ["a", "b", "c"],
//   [4, 5, 6],
//   "d",
//   "e",
//   "f",
//   [7, 8, 9, ["g", "h", "i"]],
// ];
// for (i of nestedArray) {
//   console.log("each nestedArray: ", i);
// }

// console.log("To String Nested Array: ", nestedArray.toString());

//ES6+
//arrow function

function someFunction(data) {
  console.log(data);
}

const arrowFunction = (data, args) => {
  console.log(data, args);
};
//anonymous function
() => {};

const name = "John";
const age = 23;
const isMarried = false;

//arrow function X template literals
const arrowFunction2 = (name, age, isMarried) => {
  console.log(
    `My name is ${name} and my age is ${age} and am I even married? ${isMarried}`
  );
};

arrowFunction2(name, age, isMarried);

//destructuring
const array = [1, 2, 3, 4, 5];
const person = {
  objName: "Sora",
  objAge: 23,
  objEmail: "sora@gmail.com",
};

console.log(array[2]);
console.log(person.objAge);

const { objName, objAge, objEmail } = person;
console.log(objName, objAge, objEmail);

const [a, b, c, d, e] = array;
console.log(c);

//spread operator
const array2 = [...array, 6, 7, 8, 9, 10];
console.log(array2);

const person2 = { ...person, objName: "Zora", objIsMarried: true };
console.log(person2);

//loops and control statements
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

if (true) {
  console.log("true");
} else {
  console.log("false");
}

let day = "Sun";
switch (day) {
  case "Sun":
    console.log("It's a Sunday");
    break;
  case "Mon":
    console.log("It's a Monday");
    break;
  case "Tue":
    console.log("It's a Tuesday");
    break;
  default:
    console.log("It's not a day");
    break;
}

//promises
const fs = require("fs");
const { totalmem } = require("os");
//callback
// fs.readFile("./File.txt", "utf-8", (err, data) => {
//   if (data) {
//     console.log(data);
//   } else {
//     console.log(err);
//   }
// });

// let promise = new Promise((resolve, reject) => {
//   fs.readFile("./File.txt", "utf-8", (err, data) => {
//     if (resolve) resolve(data);
//     else reject(err);
//   });
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const readTxtFile = async () => {
  try {
    const data = await fs.promises.readFile("./File.txt", "utf-8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

readTxtFile();

console.log("Hello World!");

const sumAllNumbers = [1, 2, 3, 4, 5];

let totalSum = 0;
for (let i of sumAllNumbers) {
  // let totalSum = 0;
  totalSum += i;
  console.log("Total Sum: " + totalSum);
}

// Question 1

let num = Number("123");

console.log(num + 7);

// // Question 2

let value = 0;

if (!value) {
  console.log("Invalid");
}

// Question 3

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}

// // Question 4

let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Question 5

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let mergedArray = [...array1, ...array2];

console.log(mergedArray);
// Question 6

let day = 2;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Moneday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;

  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("Invalid day");
}

// Question 7

let words = ["a", "ab", "abc"];

let lengths = words.map(function (word) {
  return word.length;
});

console.log(lengths);

// Question 8

function checkNumber(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both");
  }
}

checkNumber(15);

// Question 9

const square = (number) => {
  return number * number;
};

console.log(square(5));

// Question 10

const person = {
  name: "John",
  age: 25,
};

function getPersonInfo({ name, age }) {
  return `${name} is ${age} years old`;
}

console.log(getPersonInfo(person));

// Question 11

function sum(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Question 12

function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}

getMessage().then((message) => {
  console.log(message);
});

// Question 13

function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargest([1, 3, 7, 2, 4]));

// Question 14

function getKeys(object) {
  return Object.keys(object);
}

const person2 = {
  name: "John",
  age: 30,
};

console.log(getKeys(person2));

// Question 15

function splitWords(text) {
  return text.split(" ");
}

console.log(splitWords("The quick brown fox"));

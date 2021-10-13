// alert('Hello World!');
// console.log('Hello World!');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log("variables and constants");
console.log(global1, functionScoped, blockScoped, constant1);


console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable, floatingPointNumber, stringVariable, booleanVariable, isNumber, isString, isBoolean);

console.log('Boolean');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
console.log(`true1 ${true1}`);
console.log(`false1 ${false1}`);
console.log(`false2 ${false2}`);
console.log(`true2 ${true2}`);
console.log(`true3 ${true3}`);
console.log(`true4 ${true4}`);
console.log(`true5 ${true5}`);
console.log(`false3 ${false3}`);

console.log('If else');
if(true1) {
  console.log(true);
}

if(!false1) {
  console.log('!false1');
} else {
  console.log('false1');
}

// ternary operators
console.log('Ternary');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

// ES5 functions
function add (a, b) {
  return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);


// ES6 functions
const subtract = (a, b) => {
  return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// implied returns
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// if function only has one parameter
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// Arrays
console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
  functionScoped,
  blockScoped,
  constant1,
  numberArray1,
  stringArray1
];

const printArray = (arr) => {
  arr.map((x, index) => {
    console.log(index, x);
  })
}

printArray(variableArray1);

// array length
console.log("array index and length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);

//Add and remove data to arrays
console.log("Add and remove data to arrays");

// adding new items
numberArray1.push(6);
stringArray1.push('string3');

// splicing items from array
// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);

console.log(numberArray1);
console.log(stringArray1);

// for loops
console.log("For loops");
for(let i = 0; i < stringArray1.length; i ++){
  const string1 = stringArray1[i];
  console.log(string1);
}

// map: alternative to for loop
console.log("Map ( for loop )");
const squares = numberArray1.map(square);
const cubes = numberArray1.map(x=> x ** 3);
console.log("squares: ", squares);
console.log("cubes: ", cubes);

// find: search for item in an array
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

// find index
const fourIndex = numberArray1.findIndex(a => a === 4);
const string3Index = stringArray1.findIndex(a => a === 'string3');
console.log(`we found 4 at index ${fourIndex}`);
console.log(`we found string3 at index ${string3Index}`);

// filter: look for elements in array that meet criteria, and create a new array
console.log("Filter");
const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
console.log(numbersGreaterThan2);

const evenNumbers = numberArray1.filter(a => a % 2 === 0);
console.log(evenNumbers);

const oddNumbers = numberArray1.filter(a => a % 2 !== 0);
console.log(oddNumbers);


// template strings
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

let loggedIn2 = false;
const greeting2 = `Logged in: ${loggedIn2 ? "Yes" : "No"}`;
console.log(greeting2);

// writing to the DOM - p.9
// set class attribute
const setClassAttr = $("#set-class-attr");
setClassAttr.attr('class', 'class-0');


// add and remove classes using Jquery
// add class
const addClass1Example = $("#add-class-1");
addClass1Example.addClass('class-1');

// remove class
const removeClass1Example = $("#remove-class-1");
removeClass1Example.removeClass('class-2');

// hiding and showing content
const hideMe = $("#hide-me");
hideMe.hide();










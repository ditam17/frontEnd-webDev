// Let's declare a function. A function should have a keyword function and name of the function with parentheses and curly braces.

function greet() {
  return "Greeting sent!";
}

// To call the fucntion, we use the name of the function followed by parentheses

// greet();

// We did't see anything because we didn't log it to the console or return it in a way that we can see it.

// Let's log the result of the function to the console

// console.log(greet());

// Now we can see the output in the console.

// The return keyword is used to return a value from the function. If we don't use return, the function will return undefined by default.

// For example:-
function sayHello() {
  console.log("Hello, World!");
}
// sayHello();

// This will log "Hello, World!"

// But:-

// console.log(sayHello()); // This will log Hello, Wrold! and undefined because the function does not return anything.

// Parameters and arguments.

function addTwoNumbers(a, b) {
  // This function takes two parameters a and b
  // Parameters are placeholders for the values that will be passed to the function when it is called
  return a + b;
}
// console.log(addTwoNumbers(5, 8)); // This will log 13 to the console because we passed 5 and 8 as arguments to the function.

//Rest operators.

function shopCart(...prices) {
  // Accepts as much agruments as we pass.
  return prices;
}
// console.log(shopCart(5000, 2000, 800, 5500));

function shopCart2(price1, price2, ...prices) {
  return prices;
}
// console.log(shopCart2(500, 600, 800, 20000)); // Returns [ 800, 20000 ] because the first values are assigned to price1 and the second value is assigned to price2, and the rest are collected in the prices array.

//If you want to access every arguments:-

function shopCart3(price1, price2, ...prices) {
  // return Array.of(price1, price2, ...prices);
  //or
  return [price1, price2, ...prices]; // Preferred but even better if used single rest parameter
  //or
  // return [price1, price2].concat(prices);
  // or
  // return Array.from(arguments);
}
// console.log(shopCart3(500, 600, 800, 20000));

// To get the values of any array
const myArray = [1, 2, 3, 4, 5];
const yourArray = [10, 20, 30, 40, 50];
function getArray(arr) {
  return arr[2]; // Returns the value at index 2 of the array
}
// console.log(getArray(myArray)); // This will return 3, which is the value at index 2 of the array
// console.log(getArray(yourArray));

// To get the values of an object
const myObject = {
  name: "John",
  age: 30,
  city: "New York",
};
const yourObject = {
  name: "Wick",
  age: 40,
  city: "Los Angeles",
};
function getObj(obj) {
  return `Name: ${obj.name}, Age: ${obj.age}, City: ${obj.city}`;
}
// console.log(getObj(myObject)); // This will return "Name: John, Age: 30, City: New York"
// console.log(getObj(yourObject)); // This will return "Name: Wick, Age: 40, City: Los Angeles"

// Array
const myArray = [0, 1, 2, 3, 4, 5];
/*const myHeroes = [
  "Loki",
  "Thor",
  "IronMan",
  "Hulk",
  "Black Widow",
  "Captain America",
];
console.log(myHeroes);*/
// console.log(myArray);

myArray.push(8); // Adds to the last position of the array
myArray.pop(); // Removes the last element of the array
myArray.unshift(9); // Adds to the first position of the array
myArray.shift(); // Removes the first element of the array
// console.log(myArray);

// console.log(myArray.includes(0));
// console.log(myArray.includes(8));

// const newarray = myArray.join();
// console.log(newarray);
// console.log(typeof newarray);

// slice, splice

// console.log("A", myArray);

const myN1 = myArray.slice(2, 5);
// console.log("B", myArray);
// console.log(myN1);

const myN2 = myArray.splice(2, 5);
// console.log("C", myArray);
// console.log(myN2);

//The key difference between slice and splice is that slice returns a new array without modifying the original array, while splice modifies the original array and return removed elements.

const marvel_Heroes = [
  "Loki",
  "Thor",
  "IronMan",
  "Hulk",
  "Black Widow",
  "Captain America",
];

const dc_Heroes = ["Batman", "Superman", "flash", "Wonder"];

// using push to add a new hero to the marvel_Heroes array (------------Not recommended------------)

// marvel_Heroes.push(dc_Heroes);
// console.log(marvel_Heroes);
// // console.log(marvel_Heroes[6]);
// console.log(marvel_Heroes[6][0]); // Accessing Batman from the nested array

//Conactenation of arrays (usable but spread operator is best recommended way)

const all_Heroes = marvel_Heroes.concat(dc_Heroes);
// console.log(all_Heroes);
// console.log(marvel_Heroes);

// Spread operator (-------Recommended way--------)

const all_New_heroes = [...marvel_Heroes, ...dc_Heroes];
// console.log(all_New_heroes);
// console.log(marvel_Heroes);

// Array.isArray, from, of

// console.log(Array.isArray("abc"));
// console.log(Array.isArray(marvel_Heroes));

console.log(Array.from("abc")); // Converts a string to an array

const a = 10;
const b = 20;
const c = 30;
console.log(Array.of(a, b, c)); // Creates an array from the given arguments
console.log(Array.of(1, 2, 3, 4, 5)); // Creates an array from the given arguments

// For...of loop (applicable for iterables like arrays, strings, maps, etc. not objects)

//Basically arrays comes in two forms: ["","",""] or [{},{},{}]

const arr = [1, 2, 3, 4, 5];
for (const item of arr) {
  // console.log(item * 5);
}

let name = "Ditam Gupta";
for (const items of name) {
  if (items === " ") {
    continue; // Skip spaces
  }
  // console.log(items);
}

const map = new Map();
map.set("game", "freefire");
map.set("game2", "pubg");
for (const key of map) {
  //   console.log(key); // This will log each key-value pair as an array
}
for (const [key, value] of map) {
  // console.log(`${key} : ${value}`); // This will log each key-value pair
}

const myObj = {
  game: "freefire",
  game2: "pubg",
};
// for (const item of myObj) {
//   console.log(item); // This will throw an error because objects are not iterable
// }
// for (const [item, value] of myObj) {
//   console.log(`${item}:${value}`); // This will throw an error because objects are not iterable
// }

// For...in loop (applicable for objects)

for (const key in myObj) {
  // console.log(`${key}=${myObj[key]}`);
}

// For...in loop (applicable for arrays, but not recommended for arrays)
const arry5 = ["a", "b", "c"];
for (const key in arry5) {
  // console.log(key); // This will log the index of each element
  // console.log(arry5[key]); // This will log the value at each index
}

// forEach loop

const coding = ["JS", "Ruby", "Python"];
// coding.forEach((item) => {
//   console.log(item);
// });

//Apply foeEach for function

function printMe(item) {
  console.log(item);
}
// coding.forEach(printMe);

coding.forEach((item, index, array) => {
  //   console.log(`Item: ${item}, Index: ${index}, Array: ${array}`);
  //   console.log(item, index, array);
});

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "JS",
  },
  {
    languageName: "Java",
    languageFileName: "Java",
  },
  {
    languageName: "Python",
    languageFileName: "Py",
  },
];

myCoding.forEach((item, i) => {
  console.log(
    `languageName: ${item.languageName} \nlanguageFileName: ${item.languageFileName}, index: ${i}`
  );
});

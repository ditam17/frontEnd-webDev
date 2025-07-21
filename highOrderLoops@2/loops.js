// .forEach loops do not return the values.
const coding = ["Js", "ruby", "C", "Python"];
const itemS = coding.forEach((item) => {
  return item;
});
// console.log(itemS); // Undefined

// .filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const greaterThan4 = myNums.filter((num) => num > 4);
// console.log(myNums);
// console.log(greaterThan4);

// If we had to do get the number greater than 4 using .forEach():-

const GreaterThan4 = [];
myNums.forEach((num) => {
  if (num > 4) {
    GreaterThan4.push(num);
  }
});
// console.log(GreaterThan4);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];
const science = books.filter((items) => {
  return items.genre === "Science";
});
// console.log(science);

const historyBooksAfter1990 = books.filter((items) => {
  return items.genre === "History" && items.publish >= 1990;
});
//or
// .filter((bk) => bk.genre === "History")
// .filter((yr) => yr.publish >= 1990);

// console.log(historyBooksAfter1990);

books.forEach((items) => {
  // console.log(items.genre);
});

// .map() (Same as .forEach but better then .forEach beacuse .map() returns the value whereas .forEach() don't)

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const add10 = myNumbers.map((items) => items + 10);
// console.log(add10); // [11, 12, 13, 14, 15,16, 17, 18, 19, 20]

const add10byFOrEach = myNumbers.forEach((items) => items + 10);
// console.log(add10byFOrEach); // Undefined

// So to return values, we use .map()

const anotherNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const map_filter_Together = anotherNums
  .map((items) => {
    return items * 10 + 1;
  })
  .filter((items) => {
    return items > 50;
  });
// console.log(map_filter_Together);

// Let's learn reduce() now;

const someNum = [1, 2, 3, 4, 5];
const totalSum = someNum.reduce((accumulator, currentvalue) => {
  // console.log(
  //   `accumulator : ${accumulator} and currrentvalue : ${currentvalue}`
  // );
  return accumulator + currentvalue;
}, 0); // Value after the curly braces and comma is the value of accumulator
// console.log(totalSum);

const shoppingcart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Py Course",
    price: 5999,
  },
  {
    itemName: "Data Science Course",
    price: 12999,
  },
];
const addShoppingPrices = shoppingcart.reduce((acc, item) => {
  return acc + item.price;
}, 0);
console.log(addShoppingPrices);

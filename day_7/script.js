// Objects

const mySym = Symbol(""); // To use symbol in object
const JsUser = {
  name: "Ditam",
  age: 19,
  location: "Koteshwar",
  email: "ditam@gmail.com",
  [mySym]: "This is a symbol property", //Symbol must be in brackets
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
};

// console.log(JsUser.email); // Valid but not recommended
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

//We can update the values of an object
JsUser.email = "gupta@gmail.com";
// console.log(JsUser.email);

// But to freeze the object we can use Object.freeze

// Object.freeze(JsUser);

// Now we cannot update the object
JsUser.email = "abc@gmail.com";
// console.log(JsUser["email"]); // Still gupta@gmail.com as we updated earlier

// We can also freez objects keys

// console.log(JsUser["name"]);
// Object.freeze(JsUser["name"]);
JsUser["name"] = "Ditam Gupta"; // This will not work as we froze the name key
// console.log(JsUser["name"]); // Still Ditam

// We can treat a function as an variable in object

// JsUser.greeting = function () {
//   console.log("Hello JS User");
// };
// JsUser.greetingTwo = function () {
//   console.log(`Hello ${this.name}`);
// };
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// const tinderUser = new Object();
const tinderUser = {};
tinderUser.id = "1213abc";
tinderUser.name = "Ditam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

//We can also get the every keys, values and entries of a object. (The data will be in array format that will help us to use them in loops)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// We can also check if a key is present in the object or not.
// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
// console.log(tinderUser.hasOwnProperty("isLogged")); // false

//Easy wat yo check if a key is present in the object or not
// console.log("id" in tinderUser); // true

// Access Object inside Object
const regularUser = {
  email: "abc@gmail.com",
  fullname: {
    userFullName: {
      firstName: "Ditam",
      lastName: "Gupta",
    },
  },
};
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullName);
// console.log(regularUser.fullname.userFullName.firstName);
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

// Combine objects.
// 1st way

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };
// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

// 2nd way through spread operator
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// Object Destructuring
const myUser = {
  name: "Ditam",
  age: 19,
  location: "Koteshwar",
  email: "ditam@gmail.com",
};
const { name, age } = myUser;
// console.log(name, age);

// We can also rename the destructured variables
const anotherUser = {
  userNameForAnotehrUser: "Ditam",
  age: 19,
  location: "Baneshwar",
  email: "ditam@gmail.com",
};
const { userNameForAnotehrUser: Anothername, location } = anotherUser;
// console.log(Anothername, location);

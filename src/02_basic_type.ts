// let userName: String = "rushi";
// console.log(userName);

// // ************************************************************************************************
// // ************************************************************************************************
// // How to give types to arguments of a functions
// // Specify argument type

// function greet(firstName: string) {
//   console.log(`Hello ${firstName}`);
// }

// greet("rushi");
// greet(777); // got an error=> 777 is number
// greet("777"); // we define type as String so pass as String

// // Multile arguments with type
// function UserDetail(
//   firstName: string,
//   lastName: string,
//   id: number,
//   isLoggedIn: boolean
// ) {
//   console.log(`users first name is ${firstName} and last name is ${lastName}`);
//   console.log(`users id is ${id}`);
//   console.log(`user is logged in: ${isLoggedIn}`);
// }
// UserDetail("rushi", "tele", 123, true);

// // ************************************************************************************************
// // ************************************************************************************************
// // How to assign a return type to a function

// // it will implicitly return a number; we not define
// function sum(a: number, b: number) {
//   return a + b;
// }

// // :number => it return a number (explicitly = we need to define)
// function sum(a: number, b: number): number {
//   return a + b;
// }

// let sumTwoNum = sum(40, 20);
// console.log(sumTwoNum);

// // :String => it will return a String
// // argrument assign as num and function return a string
// function sayHello(a: number, b: number): string {
//   //   return "a + b";
//   return `${a}+${b}`;
// }

// let res = sayHello(6, 6);
// console.log(res);

// // ************************************************************************************************
// // ************************************************************************************************
// // Return true or false based on if a user is 18+

// // implicitly return boolean
// function isAdult(age: number) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isAdult(19));

// function isAdult(age: number): boolean { // explicitly
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let adult = isAdult(17);
// console.log(adult);

// // ************************************************************************************************
// // ************************************************************************************************
// // Create a function that takes another function as input and runs after 1 sec

// Fn type is fucntion (arrow) with no arg and it return nothing(Void)
// function runAfter1S(Fn: () => void) {
//   setTimeout(Fn, 5000);
// }

// runAfter1S(function () {
//   console.log("Hi there");
// });

// // ************************************************************************************************
// // ************************************************************************************************
// // ES5 don't know about arrow function; lets try it out how they can run arrow function

let greet = (name: string) => `hello, ${name}`;

// ES5 will return. it will convert arrow func to plan fucntion
// var greet = function (name) { return "hello, ".concat(name); };

// let greet = (name) => `hello, ${name}`; // this is ES6 output

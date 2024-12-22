// function isLegal(user: { firstName: string; lastName: string; age: number }) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function greet(user: { firstName: string; lastName: string; age: number }) {
//   console.log("Hey there", user.firstName);
// }

// isLegal({
//   firstName: "rushi",
//   lastName: "tele",
//   age: 20,
// });

// // we can't do like this; 2 function does't have same user arg
// // Now to solve this problem we use 'Interface'

// interface User {
//   firstName: string;
//   lastName: string;
//   age: number;
//   email?: string; // ? means you can pass or not(optional)
// }
// // // we create interface and use as an argument to below function

// function isLegal(user: User) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function greets(user: User) {
//   console.log("Hey there", user.firstName);
// }

// let result = isLegal({
//   firstName: "rushi",
//   lastName: "tele",
//   age: 16,
// });

// let result2 = greets({
//   firstName: "rushi",
//   lastName: "tele",
//   age: 16,
// });

// console.log(result);
// // console.log(result2);

// console.log(
//   greets({
//     firstName: "rushi",
//     lastName: "tele",
//     age: 16,
//   })
// );

// // *************************************************************************
// // *************************************************************************
// // implementing interface

interface Person {
  name: string;
  age: number;
  greet?(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
    console.log(`${phrase} ${this.age}`);
  }
}

const e = new Employee("rushi", 21);
console.log(e.greet);

// // interfaces V/S types
// // Interfaces are implement as a class; but types can't implemented as a class

// // // types declare with =
// type User = {
//   firstName: string;
//   lastName: string;
//   age: number;
// };

// // // interfaces declare without =
// interface User2 {
//   firstName: string;
//   lastName: string;
//   age: number;
// }

// // ***************************************************************
// // ***************************************************************
// // types 1) Unions

// function greets(id: number | string) {
//   console.log(id);
// }
//fucntion take arg as number or string

// type GreetArg = number | string;

// function greets(id: GreetArg) {
//   console.log(id);
// }

// greets(1);
// greets("11");

// type StringOrNumber = string | number;

// function printId(id: StringOrNumber) {
//   console.log(`ID: ${id}`);
// }

// printId(101); // ID: 101
// printId("202"); // ID: 202

// // ***************************************************************
// // ***************************************************************
// // types 1) Intersection
// // what is the diff between interface and a type (Interview Quation)
// // =>  interfaces can extend in a class;
// // => types can and, OR (union & intersections)

type Employe = {
  name: string;
  startDate: Date;
};

type Manager = {
  name: string;
  department: string;
};

type TeamLead = Employe & Manager;

const teamLead: TeamLead = {
  name: "harkirat",
  startDate: new Date(),
  department: "Software developer",
};

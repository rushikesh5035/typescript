//

// type Input = number | string;

// function getFirstElement(arr: Input[]) {
//   return arr[0];
// }

// // const value = getFirstElement(["rushi", "tele"]);
// // console.log(value.toUpperCase()); // got an error bcoz => array type is number or string; toUpperCase() method is only work on string ( if arr type is string is work fine)

// const value = maxFirstElement([1, 2]);
// console.log(value);

// // ***********************************************************

// function identity1(arg: number) {
//   return arg;
// }

// function identity2(arg: string) {
//   return arg;
// }

// let output1 = identity1(123); // now the output1 type number
// let output2 = identity2("hey"); // now the output2 type is string
// // but we need write no of function
// // solution is to write Generic

// // who is calling me tell me the type/ give a generic value
// function identity<T>(arg: T) {
//   return arg;
// }

// let output1 = identity<string>("hey"); // string generic value; it will return string here
// let output2 = identity<number>(123); // number generic value; it will return number here

// console.log(output1);
// console.log(output2);

// // Now solve original problem
type Input = number | string;

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const el1 = getFirstElement(["rushi", "tele"]); // this is work OR
// const el1 = getFirstElement<string>(["rushi", "tele"]); // u can mention <string> generic value
console.log(el1.toUpperCase());

const el2 = getFirstElement<number>([1, 2]);
console.log(el2);

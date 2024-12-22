// // // define arr as number arr => Arr : number[]
// function maxVal(Arr: number[]) {
//   let max = 0;
//   for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] > max) {
//       max = Arr[i];
//     }
//   }
//   return max;
// }
// maxVal([1, 2, 3, 4]);

// // we can also define as an type
// type numberArr = number[];

// function maxVal(Arr: numberArr) {
//   let max = 0;
//   for (let i = 0; i < Arr.length; i++) {
//     if (Arr[i] > max) {
//       max = Arr[i];
//     }
//   }
//   return max;
// }

// maxVal([1, 2, 3, 4]);

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function filterUsers(user: User[]) {
  return user.filter((x) => x.age >= 18);
}

filterUsers([
  {
    firstName: "rushi",
    lastName: "tele",
    age: 21,
  },
  {
    firstName: "nilesh",
    lastName: "narwade",
    age: 23,
  },
]);

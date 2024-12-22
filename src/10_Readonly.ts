const user = {
  name: "rushi",
  age: 21,
};

user.name = "asd"; // it will update when const it there; How
console.log(user.name);

// // Same will happen with array

const arr = [1, 2, 3, 4];
arr[0] = 5;
console.log(arr);
// // bcoz u will change internal value of array (a[o] index values); not chnage like {a=[1}
// // same for object

//// but it will not work on a string
// const z = "asd";
// z = "asdfg"; // not update

// // ReadOnly
type User2 = {
  name: string;
  age: number;
};

// const userx: User2 = {
//   name: "rushi",
//   age: 22,
// };

//it will work on holl object
const userx: Readonly<User2> = {
  name: "rushi",
  age: 22,
};

// userx.name = "rushi"; // not will change bcoz; it assign as read-only

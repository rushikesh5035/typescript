// interface User4 {
//   Id: string;
//   name: string;
// }

// type Users = { [key: string]: User };

// const users: Users = {
//   abc123: {
//     Id: "abc123",
//     name: "John Doe",
//   },
//   xyz789: {
//     Id: "xyz789",
//     name: "Jane Doe",
//   },
// };

// OR

// type Users = { [key: string]: string };

// const users: Users = {
//   abc123: "Jane",
//   xyz789: "Doe",
// };

// // Records
interface Userx {
  id: string;
  name: string;
}

// type Usersz = Record<string, Userx>;

// OR
type Usersz = Record<string, { id: string; name: string }>;

const usersz: Usersz = {
  abc123: { id: "abc123", name: "John Doe" },
  xyz789: { id: "xyz789", name: "Jane Doe" },
};

console.log(usersz["abc123"]); // Output: { id: 'abc123', name: 'John Doe' }

// // Map

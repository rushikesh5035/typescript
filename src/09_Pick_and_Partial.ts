/* *********************** PICK ******************************
 ***************************************************************
 */
interface User1 {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

/* ************************Partial*******************************
  makes all properties of a type optional
*/

// do like this to optional
// interface User1 {
//     id?: number;
//     name?: string;
//     age?: number;
//     email?: string;
//     password?: string;
//   }

// function sumOFAge(user1: User1, user2: User1) {
//   return user1.age + user2.age;
// }

// const age = sumOFAge({ name: "nilesh", age: 21 }, { name: "yash", age: 20 });
// console.log(age);

// For a profile display, only pick `name` and `email`
type UpdateProfile = Pick<User1, "name" | "age" | "email">;

// or Like this
type UpdateProfileOptional = Partial<UpdateProfile>;

function updateUser(UpdateProfile: UpdateProfileOptional) {
  //hit the database tp update the user
}
// ******************************************************************
updateUser({
  name: "rushi",
});

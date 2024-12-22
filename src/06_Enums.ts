// type keyInput = "up" | "down" | "left" | "right";

// function doSomthing(keyPressed: keyInput) {
//   //
// }

// doSomthing("up");
// doSomthing("down");
// doSomthing("left");

enum Direction {
  //   Up, //0 => Up convert ts into js to 0
  //   Down, //1
  //   Left, //2
  //   Right, //3

  //   Up = "Up",
  //   Down = "Down",
  //   Left = "Left",
  //   Right = "Right",

  Up = 1, // start from 1;
  Down,
  Left,
  Right,
}

function doSomthing(keyPressed: Direction) {
  //
  if (keyPressed == Direction.Up) {
    // do somthing
  }
}
doSomthing(Direction.Up);
doSomthing(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);

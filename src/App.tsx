import React from "react";

function App() {
  type Calc = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculator(calc: Calc, num1: number, num2: number): number {
    switch (calc) {
      case "add":
        return num1 + num2;
      case "substract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      case "remainder":
        return num1 % num2;
      default:
        throw new Error("unknown calc");
    }
  }
  console.log(calculator("add", 2, 3));
  console.log(calculator("substract", 2, 3));
  console.log(calculator("multiply", 2, 3));
  console.log(calculator("divide", 2, 3));
  console.log(calculator("remainder", 2, 3));

  type Type = { x: number; y: number };
  const position: Type = { x: 0, y: 0 };
  type PositionType = "up" | "down" | "right" | "left";
  function move(type: PositionType) {
    switch (type) {
      case "up":
        position.y = position.y + 1;
        break;
      case "down":
        position.y = position.y - 1;
        break;
      case "right":
        position.x = position.x + 1;
        break;
      case "left":
        position.x = position.x - 1;
        break;
      default:
        throw new Error("unknown positionType");
    }
  }
  console.log(position);
  move("up");
  console.log(position);
  move("right");
  console.log(position);
  move("down");
  console.log(position);
  move("left");
  console.log(position);
  return <div className="App">hello</div>;
}

export default App;

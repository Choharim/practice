import React from 'react';

function App() {
  type Calc = "add" | "substract" | "multiply" | "divide" | "remainder";
  function calculator(calc:Calc,num1:number,num2:number):number{
    switch(calc){
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
  };
  console.log(calculator("add",2,3));
  console.log(calculator("substract",2,3));
  console.log(calculator("multiply",2,3));
  console.log(calculator("divide",2,3));
  console.log(calculator("remainder",2,3));

  
  return (
    <div className="App">
     hello
    </div>
  );
}

export default App;

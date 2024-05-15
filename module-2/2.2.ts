{
  //

  // interface

  type User1 = {
    name: string;
    age: number;
  };
  // interface always starts with {}.Thats why we can use it on objects .we can not is on primitive types
  interface User2 {
    name: string;
    age: number;
  }

  interface User3 extends User2 {   //intersection using extends
    role: number;
  }

  const user1: User3 = {
    name: "John",
    age: 20,
    role: 34,
  };

  // interface in array

  type Roll1 = number[];
  
  interface Roll2 {
    [index: number]: number;
  }
  const rollNUmber1: Roll2 = [1, 4, 5];

  // interface in function

  type Add = (number1: number, number2: number) => number;
  interface Add2 {
    (number1: number, number2: number): number;
  }

  const add: Add2 = (number1, number2) => {
    return number1 + number2;
  };

  //
}

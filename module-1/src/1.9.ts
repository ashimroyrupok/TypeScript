{
  // type alias

  type Student = {
    name: string;
    age: number;
    address: string;
    bellow19: boolean;
    contact?: number;
  };

  const student1: Student = {
    name: "ashim",
    age: 18,
    address: "rangpur",
    bellow19: true,
  };
  const student2: Student = {
    name: "ashim",
    age: 18,
    address: "rangpur",
    bellow19: true,
  };

  // type alias for function
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => {
    return num1 + num2;
  };
}

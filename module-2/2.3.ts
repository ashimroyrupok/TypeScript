{
  //

  // generic type

  //   const rollNUmbers: number[] = [2, 423, 2];
  const rollNUmbers: Array<number> = [2, 423, 2]; //generic type

  //   const mentors: string[] = ["a", "b", "c"];
  const mentors: Array<string> = ["a", "b", "c"]; //generic type

  //   const boolArray: boolean[]=[true, false, false];
  const boolArray: Array<boolean> = [true, false, false]; //generic type

  type GenericArray<T> = Array<T>; //for reuse

  const subject: GenericArray<string> = [
    "accounting",
    "java",
    "python",
    "java-script",
  ];
  // use generic in array of objects
  const user: GenericArray<{
    name: string;
    roll: number;
  }> = [
    {
      name: "Mr X",
      roll: 1,
    },
    {
      name: "Mr Y",
      roll: 2,
    },
  ];

  //   generic tuple
  type GenericTuple<X, Y> = [X, Y];
   interface User {
     name: string;
     roll: number;
   }

  const human: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];


  const roll: GenericTuple<number, {name:string,roll:number} >  =[1,{name:"xaad",roll:2}]







  //
}

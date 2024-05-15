{
  //

  // type assertion
  let something: any;
  something = "hey beda any value";
  (something as string).length;

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const intValue = parseFloat(value) * 1000;
      return `the converted value is ${intValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };


  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("2000") as string;


  type CustomError={
    message:string
  }
  try {
    
  } catch (error) {
    console.log((error as CustomError).message);
  }


//   
}

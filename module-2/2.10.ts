{
  // mapped types

  const arrayOfNumbers: number[] = [1, 2, 3];

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  );

  type AreaNumber = {
    height: number;
    width: number;
  };

  type AreaString<T> = {
    // [key in "height"|"width"]:string
    // [key in keyof AreaNumber]:string;
    [key in keyof T]: T[key];
  };

  type Height = AreaNumber["height"]; //look up type

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 345,
  };

  //
}

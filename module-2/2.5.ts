{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("bd");

  const res2 = createArrayWithGeneric<boolean>(true);

  type User = {
    id: number;
    name: string;
  };
  const resGenericObj = createArrayWithGeneric<User>({ id: 333, name: "aa" });

  const student = <T>(details: T) => {
    return { details };
  };

  interface User5 {
    name: string;
    roll: number;
  }
  const student1 = student<User5>({
    name: "a",
    roll: 2,
  });

  console.log(student1)

  //
}

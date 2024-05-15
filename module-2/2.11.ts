{
  // utility types

  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type Name = Pick<Person, "name" | "age">; //union diye nibo ja ja drkr;

  // omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // required

  type PersonRequired = Required<Person>;

  // partial

  type PersonOptional = Partial<Person>;

  // readOnly
  type PersonReadOnly = Readonly<Person>;

  const Person1: PersonReadOnly = {
    name: "ma",
    age: 23,
    email: "adfasf",
    contactNo: 234534,
  };


//   record


// type MyObj={
//     a:string;
//     b:string;
// }

type MyObj= Record<string,number>;

const EmptyObj:Record<string,unknown>={}; //important

const obj1:MyObj={
    a:12,
    b:23
}





  //
}

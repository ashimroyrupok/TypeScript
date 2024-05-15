{
  // conditional types

  type A1 = null;
  type B1 = string;

  type X = A1 extends null ? null : false; //conditional type;

  type Y = A1 extends undefined ? null : B1 extends undefined ? undefined : any;

  type School = {
    name: string;
    student: number;
    teacher: number;
  };

  type CheckValue<T> = T extends keyof School
   ? true : false;

  type HasPlan = CheckValue<"name">;

  //
}

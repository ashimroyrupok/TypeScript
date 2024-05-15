{
  // constraints

  const students = <T extends { name: string; roll: number; class: number }>(
    student: T
  ) => {
    return { student };
  };

  const student1 = students({ name: "x", roll: 2, class: 4 });

  const student2 = students({ name: "a", roll: 1, class: 3 });

  //
}

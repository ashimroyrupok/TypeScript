{
  // promise

  // simulate

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "hello world";

      if (data) {
        resolve(data);
      } else {
        reject({ message: "reject" });
      }
    });
  };

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    // const result = await data.json();
    // console.log(data)
    return data;
  };

  console.log(showData());

  //
}

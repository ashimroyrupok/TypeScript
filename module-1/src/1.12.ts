{
  // nullable types

  const searchName = (value: string | null) => {
    if (value) {
      console.log("searching");
    } else {
      console.log("there is nothing to search");
    }
  };

  searchName(null);

  // unknown typeof

  const getSpeedInMeeterPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
    }
    else if (typeof value === "string") {
      const [numbers, unit] = value.split(" ");
      const convertedSpeed = (parseFloat(numbers) * 1000) / 3600;
      console.log(`the speed is ${convertedSpeed} ms^-1`);
      console.log(convertedSpeed);
    }else{
        console.log("wrong input")
    }


  };

  getSpeedInMeeterPerSecond("100 km");



//   never
 function throwError(message:string):never{
    throw new Error(message)
 }

 throwError("helloo")


}

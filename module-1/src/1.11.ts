{
  //ternary operator || optional chaining|| nullish coalescing

  const age:number= 23;

  if(age >=18){
    console.log("adult")
  }else{
    console.log("not adult")
  }

  const isAdult= age >18 ? "adult": "not adult";
  console.log({isAdult})

// nullish coalescing operator 
// when undefined and null use

const isAuthenticated = undefined;
const result1 =  isAuthenticated ?? "Guest";

const result2 = isAuthenticated ? isAuthenticated:"Guest";
console.log({result1,result2})




  //
}

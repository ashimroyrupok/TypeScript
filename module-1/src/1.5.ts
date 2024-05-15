// reference type --> object;

const user :{
  readonly  firstName:string;
    middleName:string;
    lastName?:string;  //optional
    isMarried?:boolean;
    company:"rpi";
}={
    firstName:"john",
    middleName:"smith",
    lastName:"haque",
    company:"rpi"
}


console.log(user.lastName)
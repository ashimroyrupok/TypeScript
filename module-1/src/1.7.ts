{
  // spread operator;
  // rest operator;
  // destructuring

  // lear  spread operator;

  const bros1: string[] = ["a", "b", "c"];
  const bros2: string[] = ["d", "b", "c"];

    bros1.push(...bros2)



    const fruits1={
        apple:"red",
        banana:"yellow",
        orange:"orange"
    }
    const fruits2={
        apple:"red",
        banana:"yellow",
        orange:"orange"
    }


    const newFruits={
        ...fruits1, ...fruits2
    }


    // rest operator

    const  greetFriends=(...friends:string[])=>{

       friends.forEach((friend:string)=>{
        console.log(friend)
       })
    }


    greetFriends("adu","modu","jodu","kodu")



}

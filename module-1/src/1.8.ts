{
    // destructure 


    const user ={
        id:24,
        name:{
            firstName:"ashim",
            middleName:"roy",
            lastName:"rupok"
        },
        address:"rangpur"
    }

    const {name:{firstName:sureName}}=user


    const myFriends=["rasel","tiger","villen","apple","Anik"
    ]

    const [,,justFriend,...rest]= myFriends;

}
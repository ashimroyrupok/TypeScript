{
    // generic constraint with keyof operator


    type Vehicle={
        bike:string;
        car:string;
        ship:string;
    };


    type Owner ="bike"| "car"|"ship"  //manually using union

    type Owner2 = keyof Vehicle;  //use keyof


    const person1:Owner="car"
    const person2:Owner2="ship";



    const getPropertyValue= <X,Y extends keyof X > (obj:X,key:Y)=>{

        return obj[key]

    }

    const user={
        name:"Mr Smith",
        age:30,
        address:"abc"
    }

    const result1= getPropertyValue(user,"age")


    console.log(result1)








    // 
}
{
    
    // learning function
// normal
// arrow function


function add(num:number,num2:number):number{
    return num + num2
}

add(3,5)

const addArrow = (num1:number,num2:number=2):number=>{
    return num1 + num2;
}


// object -->function-->method


const gorib={
    name:"ashim",
    balance:0,
    addBalance(balance:number):string{
        return `my balance is : ${balance}`
    }
}

// 
const arr:number[]=[1,23,4];
const newArray = arr.map((elem:number):number=>{
   return elem *elem;
})

}




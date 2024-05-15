{

    // union types


    // type FrontendDeveloper="noob"| "juniorDeveloper";
    // type FullStackDeveloper="frontendDeveloper"|"fullstackDeveloper";
    // type Developer = FrontendDeveloper | FullStackDeveloper

    // const newDeveloper : Developer = "juniorDeveloper" 

    // const ashim : FrontendDeveloper="noob"


    // type User={
    //     name:string;
    //     gender:"male"|"female";
    //     bloodGroup:"A+"|"B+"|")+";
    

    // }
    // const roy :User={
    //     name:"ashimRoy",
    //     gender:"male",
    //     bloodGroup:"B+"
    // }


    // intersection types -->common properties

    type FrontendDeveloper = {
        skill:string[];
        designation1:"Frontend Developer"

    }

    type BackendDeveloper = {
        skill:string[];
        designation2:"Backend Developer";
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper:FullStackDeveloper={
        skill:["mern","nosql"],
        designation1:"Frontend Developer",
        designation2:"Backend Developer"
    }



}
/*const student ={
    fullName:"Chaitanya Mate",//Property
    marks:94.4,
    printMarks:function(){
        console.log("Marks= ",marks);
    },
};*/

/*const employee = {
    calcTax(){
        console.log("tax rate is 10%");
    },
};

const KaranArjun = {
    salary:50000,
};

KaranArjun.__proto__ =employee;*/

/*class ToyotaCar{
    start(){
        console.log("start");  
    }

    stop(){
        console.log("stop");
    }
}
let fortuner = new ToyotaCar();*/

/*class Person{
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve Problem,s build something");
    }
}

let chaituObj = new Engineer();*/

/*class Person{
    constructor(){
        this.species = "Home Sapiens";
    }
    eat(){
        console.log("eat");

    }
}
class Engineer extends Person{
    constructor(branch){
        super(); //to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        console.log("Solve Problems,build something");
    }
}
let engobj = new Engineer("Chemical ENgineer" );*/

let DATA = "Secret information";
class user{
    constructor(name, email){
        this.name = name;
        this.email = email;

    }
    viewData(){
        console.log("data = ", DATA);
    }
}

let student1 = new user("Ramu","ramu@gmail.com");
let student2 = new user("Shamu","shamu@gamul.com");

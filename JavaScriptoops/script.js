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


class Parent{
    hello(){
        console.log("Hello");
    }

}
class Child extends Parent{}
 let obj = new Child();

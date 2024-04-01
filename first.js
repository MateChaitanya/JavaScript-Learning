/*fullName = "Tony Stark";
age =24;
price = 99.99;
console.log(fullName);
console.log(price);
console.log(age);*/

/*const student = {
    fullname : "rahul Kumar",
    age : 20,
    cgpa : 8.2,
    ispass :true,
};

student["age"] = student["age"] + 1;
console.log(student["age"]);*/

/*
const product = {
    title:"Ball Pen",
    rating: 4,
    offer : 5,
    price : 270,
};
console.log(product);
*/

/*const profile = {
    username:"@shradhakhapra",
    isfollow:false,
    follower:123,
    following:123
};
console.log(profile);*/

//------------------------------------------------------------------------------------

//Arithmetic operation
/*
let a=5;
let b=2;

console.log("a = ", a, " &  b = ",b);
console.log("a + b =",a+b);
console.log("a - b =",a-b);
console.log("a * b =",a*b);*/
/*
//Unary Operator
let a = 5;
let b = 2;

a += 4; // a = a+4
console.log("a = ", a);  

console.log("a = ", a, " & b = ",b);
console.log("a++ =" , a++);
console.log("a = ",a)*/

//logical Opertaor
/*
let a = 6;
let b = 5;

console.log("cond1 && cond2 = ",a<b || a==6);*/

//Conditional Statements
 /*
 let mode = "dark";
 let color;

 if(mode === "dark"){
    color ="black";
 }

 if(mode === "light"){
    color = "white";
 }

 console.log(color);
*/
//let age = 16;
// if(age>18){
//     console.log("You can vote");
// }

// if(age<18){
//     console.log("you can not vote");
// }

//if else condition
/*
let mode = " light";
let color;

if(mode == "dark"){
    color = "black";
}else{
    color = "white"
}
console.log(color);
*/
/*
let mode = "dark";
let color;

if(mode === "dark"){
    color = "black";
}else if(mode === "blue"){
    color = "blue";
}else if ( mode === "pink"){
    color = "pink";
}else{
    color = "white";
}

console.log(color);
*/

//Conditional Statement 
/*let age = 25;
let result = age >=18 ? "adult " : "not adult";
console.log(result);*/

/*let num = prompt("enter a number:");

if(num % 3 === 0 ){
    console.log(num,"is a multiple of 3");
}
else{
    console.log(num,"is not a multiple of 3")
}
*/

// for(let i = 1; i<=5;i++){
//     console.log("Apna Collage")
// }



// //Calculate sum of 1 to 5 

// let sum = 0;
// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }
// console.log("sum = ",sum);
// console.log("loop has ended");

// //Print 1 to 5 

// for(var i = 1; i <=5; i++){
//     console.log("i = ", i);
// }

// console.log(i); 


// let i = 1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }

// let i = 1;
// do{
//     console.log("i=",i);
//     i++;
// }while ( i<=10);

//Practice Qs1
for( let num = 0 ; num <=100; num ++){
    if(num%2 ===0){ //even number 
        console.log("num =", num);
    }
}

for( let num = 0 ; num <=100; num ++){
    if(num%2 !==0){ //odd number 
        console.log("num =", num);
    }
}

//Practice Qs2

let gameNum = 25;
let userNum = prompt("Guess the game number : ");
while(userNum != gameNum){
    userNum =  prompt("You enterd wrong number. Guess again ")
}
console.log("Congratulations, you entered the right number");
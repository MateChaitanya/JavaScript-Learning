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
// for( let num = 0 ; num <=100; num ++){
//     if(num%2 ===0){ //even number 
//         console.log("num =", num);
//     }
// }

// for( let num = 0 ; num <=100; num ++){
//     if(num%2 !==0){ //odd number 
//         console.log("num =", num);
//     }
// }

// //Practice Qs2

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");
// while(userNum != gameNum){
//     userNum =  prompt("You enterd wrong number. Guess again ")
// }
// console.log("Congratulations, you entered the right number");

//Strings


// let str = "Chaitanya";

// console.log(str[0]);

// let obj = {
//     item:"Pen",
//     price:10,
// };

// console.log("The cost of",obj.item, "is" ,obj.price)

// //Template Literals 
// let specialString = 'This is a template literal';
// console.log(specialString);

// let str ="            Chaitaya";
// str= str.toUpperCase();
// console.log(str);

// console.log(str.trim());

//-----------------------------------------------------------------------------------------
//Function 

/*function myfunction(){
    console.log("Welcome to JavaScript Tutorial !");
    console.log("We are learning JS :")
}

myfunction();*/

/*function sum(x,y){
    console.log(x+y);
}

sum(3,4); */

//Sum Function

/*function sum(a,b){
    return a+b;

}
const arrowsum = (a,b)=>{
    console.log(a+b);
};

//Multiplication 
function mul(a,b){
    return a*b;
}
const arrowmul =(a,b)=>{
    console.log(a*b);
};*/

//Practice question 
/*
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count; 
}
const countVow = (str)=> {
    let count = 0;
    for(const char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
};*/

//ForEach Loop in Array

/*let arr = [1,2,3,4,5];

arr.forEach(function printVal(val){
    console.log(val);
});*/

/*let arr = ["Pune","Delhi","Mumbai"];

arr.forEach((val,idx,arr)=>{
    console.log(val.toUpperCase(),idx,arr);
});*/

/*let nums = [ 67,53,89];

let newArr = nums.map((val)=> {
    return val * val; 
});

console.log(newArr);
let calcSquare = (num) => {
    console.log(num * num);
};*/

/*let arr = [1,2,3,4,5,6,7];

let evenArr = arr.filter((val) => {
    return val % 2 ===0;
});

console.log(evenArr);*/

let arr = [1,2,3,4];
const output = arr.reduce((res , curr) =>{
    return res + curr;
});

console.log(output);
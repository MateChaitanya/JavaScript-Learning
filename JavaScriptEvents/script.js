 let btn1 = document.querySelector("#btn1");

 btn1.onclick =(e) => {
    console.log(e);
    console.log(e.type);
    /*console.log("btn1 was Clicked");
    let a =25;
    a++;
    console.log(a);*/
 };

 let div = document.querySelector("div");
 div.onmouseover = () =>{
    console.log("You are inside div");
 };
/*console.log("hello");
alert("Apna College");*/

/*console.dir(document.body);
console.log(document.body);*/

/*let heading = document.getElementById("heading");
console.dir (heading);*/

/*let heading = document.getElementsByClassName("heading-class");
console.dir(heading);
console.log(heading);*/

/*let parahs = document.getElementsByTagName("p");
console.dir(parahs);*/

/*let elements = document.querySelector("p");
console.dir(elements);*/
//------------------------------------------------------------------------------------


/*let h2 = document.querySelector("h2");

console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna College Students"; //Concatenate */

/*let divs = document.querySelectorAll(".box");
divs[0].innerText = "new unique value 1";
divs[1].innerText = "new unique value 2"; 
divs[2].innerText = "new unique value 3";
 */

/*let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);*/

let newBtn = document.createElement("button");
newBtn.innerText="click me! ";
console.log(newBtn);

let div = document.querySelector("div");
//div.append(newBtn);//this is for end of div(Inside)
//div.prepend(newBtn); // this is for top of div node(inside)

div.after(newBtn);
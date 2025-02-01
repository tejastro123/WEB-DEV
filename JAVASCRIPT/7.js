// DOM - DOCUMENT OBJECT MODEL (PART-1)

/* write a code that upon clicking the button it will alert clicked an print 
 button clicked in the console */

console.dir(document.body.childNodes[1]);

let p1 = document.getElementById('p1');
console.log(p1);
let heading1 = document.getElementById('heading');
console.log(heading1);
let heading2 = document.getElementsByClassName('heading');
console.dir(heading2);
let button = document.getElementsByClassName("mybtn");
console.dir(button);
let paras = document.getElementsByTagName("p");
console.dir(paras);

let elements = document.querySelector("p");
console.dir(elements);
let all = document.querySelectorAll("p"); 
console.log(all);
let allEl = document.querySelectorAll(".mybtn");
console.dir(allEl);
 
let firstel = document.querySelector("div");
console.dir(firstel); 

let h1 = document.querySelector("h1");
console.dir(h1.innerText);

h1.innerText = h1.innerText + " from Tejas";

let divs = document.querySelectorAll(".box");
console.log(divs[0].innerText);
console.log(divs[1].innerText);
console.log(divs[2].innerText);

let idx = 1;
{
for (i in divs){
    divs.innerText = `new value ${idx}`;
    idx++;
}
for( i in divs){
    console.log(divs[i].innerText);
}
} 


// DOM - DOCUMENT OBJECT MODEL (PART-2)

let div = document.querySelector("div");
console.log(div);
let clas = div.getAttribute("class");
console.log(clas);
let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para);
let pclas = para.getAttribute("class");
console.log(pclas);

console.log(div);
div.style.backgroundColor = "red";
div.style.fontSize ="25px";
div.innerText = "Hello";

//insert element

let newbtn = document.createElement("button");
newbtn.innerText = "CLICK Me!";
console.log(newbtn);

let div = document.querySelector("div");
div.append(newbtn);
div.prepend(newbtn);
div.before(newbtn);
div.after(newbtn);

let newhead = document.createElement("h1");
newhead.innerHTML = "<i> HI I AM TEJAS ! </i>";

document.querySelector("body").prepend(newhead); 

para.remove();

let newbtn = document.createElement("button");
newbtn.innerText = "CLICK Me!";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";

document.body.append(newbtn);

console.log(para);
//para.setAttribute("class", "newclass");
para.classList.add("newclass");
para.classList.remove("newclass");

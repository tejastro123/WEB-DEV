//EVENTS
/*inline handle <<<< JS handle   for events*/ 

//event handle
// let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("Button 1 clicked");
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

//event handlers(objects)
// let btn2 = document.querySelector("#btn2");
// btn2.onclick= (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

//event listeners
// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) =>{
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     console.log("Button 1 clicked - h1");
// });

// const handler3 = () => {
//     console.log("Button 1 clicked - h3");
// };

// btn1.addEventListener("click",handler3);

// btn1.addEventListener("click", (evt) =>{
//     console.log("Button 1 clicked - h2");
// });

// btn1.removeEventListener("click", handler3);

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body"); 
let currmode = "light"; //dark

modebtn.addEventListener("click",() =>{
    if(currmode == "light"){
        currmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light";
        body.classList.add("light");
    }
    console.log(currmode);
});
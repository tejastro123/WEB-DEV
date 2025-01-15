/* commets 
  Importation des modules nécessaires
  Express pour créer un serveur web
  body-parser pour gérer les données JSON
*/
//operators//

//arithmetic operators
//+ - * / ++ -- % **
let a = 3;
let b = 4;

console.log(a + b); //7
console.log(a - b); //-1
console.log(a * b); //12
console.log(b / a); //1.3333
console.log(b % a); //1
console.log(a ** b); //81
console.log(++a);//4
console.log(--b); //3

//assignment operators
// = += -= *= %= **= 
let x = 5;
let y = 10;

x += y;
console.log(x); //15
y -= x;
console.log(y); //-5
x *= y;
console.log(x); //-75
x %= y;
console.log(y); //-5
y **= x;
console.log(x);//0

//comparison operators
// == === != !== > < >= <=

console.log(5 == 5); //true
console.log(5 === 5); //true
console.log(5 != 5); //false
console.log(5 !== "5"); //true
console.log(5 > 4); //true
console.log(5 < 4); //false

//logical operators
// && || !

let A = true;
let B = false;

console.log(A && B); //false
console.log(A || B); //true
console.log(!A); //false


// CONDITIONAL STATEMENTS //

//if 
let color;
let mode1 = "dark";
if(mode1 == "dark"){
    color = "black";
}

//if-else
let color2;
let mode2 = "dark";
if(mode2 == "dark"){
    color2 = "black";
} else {
    color2 = "white";
}
console.log(color2);
mode2=="dark" ? color2 = "black" : color2 = "white";
console.log(color2);

//else-if
let age = prompt("Enter age");
if(age<18) { console.log("minor");}
else if(age<60) { console.log("major"); }
else { console.log("senior"); }

//switch
let n = "tejas";
switch(n) {
    case "tejas":
        console.log("Hello Tejas");
        break;
    case "Mellimpudi":
        console.log("Hello Mellimpudi");
        break;
    default:
        console.log("Hello");
}

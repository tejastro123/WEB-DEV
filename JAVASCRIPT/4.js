// STRINGS IN JS

let str1 = "Hello, World!";
let str2 = 'Hello, tejas!';

console.log(str1);
console.log(str2);

console.log(str1[7]);

//template literales
let obj ={
    item: "pen",
    price: 10,
};
let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);
console.log(" the cost of", obj.item ,"is",obj.price,"rupees");
console.log(typeof output);

let tname = "tejas \t mellimpudi";
console.log(tname);
console.log(tname.length);

//STRING METHODS
let str3 = " Tejas M "
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());
console.log(str3.charAt(3));
console.log(str3.charCodeAt(4));
console.log(str3.indexOf("s"));
console.log(str3.trim());
console.log(str3.split(" "));
console.log(str3.slice(0,6));
let str4 = "Mellimpudi";
console.log(str3.concat(str4));
console.log(str3.replace("M", "Mellimpudi"));

//1
let fullname = prompt("Please enter your fullname without spaces");
let username = "@" + fullname + fullname.length;
console.log(username);
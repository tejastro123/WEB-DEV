//ARRAYS

let fruits = ["apple", "banana", "orange", "grape"];
for(let i=0; i<fruits.length; i++){
    console.log( i,fruits[i]);
}
console.log(fruits.length);
console.log(typeof fruits);

fruits.push("mango");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.toString();
console.log(fruits);

let f2= ["mango","papaya","watermellon"];
console.log(fruits.concat(f2));

let index = fruits.indexOf("banana");
console.log(index);

fruits.sort();
console.log(fruits);

fruits.unshift("mango");
console.log(fruits);

fruits.shift();
console.log(fruits);

console.log(fruits.slice(0,2));

for(let fruit of fruits){
    console.log(fruit);
}

let el = "kiwi";
console.log(fruits.splice(0,2,el));
console.log(fruits);

let items = [250,645,300,900,50];

let idx = 0;
for(let val of items){
    console.log(`value at index ${idx} = ${val}`);
    idx++;
}

for(let i = 0; i < items.length; i++){//10% off
    let offer = items[i]/10;
    items[i] -= offer;
}
console.log(items);


let companies = ["bloomberg","microsoft","apple","uber","google","netflix"];

companies.pop();
console.log(companies);

companies.shift();
console.log(companies);

companies.splice(2,1,"ola");
console.log(companies);

companies.push("amazon");
console.log(companies);
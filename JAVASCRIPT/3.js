
console.log("HELLO I AM TEJAS")
//for loop

for(let i = 0; i < 10; i++){
    console.log(i)
}

//while loop
let i = 0;

while(i < 10){
    console.log(i)
    i++
}

//do while loop
let a = 0;

do{
    console.log(a)
    i++
}while(i < 10)

//break statement
let b = 0;

while(true){
    console.log(b)
    b++
    if(b === 10){
        break;
    }
}

//continue statement
let c = 0;
let d = 0;

while(c < 10){
    if(c % 2 === 0){
        c++
        continue;
    }
    console.log(c)
    d++
}
console.log("Total count: " + d);

// for-of-loop

let arr = [1,2,3,4,5];

for(let value of arr){
    console.log(value)
}

// for-in-loop
let obj = { a: 1, b: 2, c: 3, d: 4};

for(let key in obj){
    console.log(key + " -> " + obj[key])
}

let str = "tejas mellimpudi";
for( let i in str){
    console.log(str[i]);
}

let student = {
    name: "tejas",
    age: 20,
    grade: "A",
    ispass : true,
};

for(let key in student){
    console.log(key + " -> " + student[key])
}

for(let num =0; num<=100; num++){
    if(num % 2 === 0){
        console.log(num)
        continue;
    }
}

// number guessing game 
let number = Math.floor(Math.random() * 100) + 1;

let guess = Number;
while(guess !== number){
    guess = Number(prompt("Guess a number between 1 and 100"));
    if(guess < number){
        alert("Too low! Try again.");
    }else if(guess > number){
        alert("Too high! Try again.");
    }
}
console.log(number);
 
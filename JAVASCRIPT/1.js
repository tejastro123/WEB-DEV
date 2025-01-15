//print in console
console.log("TEJAS");

//variables
name1 = "TEJAS";
value = 3;
isfollow = false;
a = null;
name1 = name1 + " " + value;

console.log(name1);
console.log(value);
console.log(isfollow);

//blocks
{
    let a = 2; //let
    const b = 3; //const
    console.log(a);
    console.log(b);
}
{
    var b = 4;//var
    let a = 5;
    console.log(a);
    console.log(b);
}

//datatypes
//number
let price = 99.99;
//string
let name = "TEJAS";
//boolean
let isTrue = true;
let isFalse = false;
//undefined
let undef;
//null
let nullValue = null;
//bigint
let x = BigInt("123");
//symbol
let sym = Symbol("TEJAS");

console.log(typeof price + " " + price);
console.log(typeof name + " " + name);
console.log(typeof isTrue + " " + isTrue);
console.log(typeof undef + " " + undef);
console.log(typeof nullValue + " " + nullValue);
console.log(typeof x + " " + x);
console.log(typeof sym + " " + String(sym));

// objects

const student = {
    name: "TEJAS",
    age: 20,
    cgpa : 9.2,
    ispass : false,
};

console.log(student.name);
console.log(student.age);
console.log(student.cgpa);
console.log(student.ispass);

student["name"] = "tejas mellimpudi";
console.log(student.name);
console.log(typeof student);
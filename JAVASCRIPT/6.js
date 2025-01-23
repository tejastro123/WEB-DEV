// function
function sum (a,b){
    s = (a) + (b);
    return s;
}

let val = sum(3,4);
console.log(`Sum is:${val}`);

// arrow finction
let add = (a,b) => {
    console.log(a + b);
};
add(5,6);   

const mult = (a,b) => {
    console.log( a * b );
};

const printhello = () => {
    console.log("Hello World");
}

function countvowels (str){
    let count = 0;
    for(const char in str){
        if(str[char].toLowerCase() === 'a' || str[char].toLowerCase() === 'e' || str[char].toLowerCase() === 'i' || str[char].toLowerCase() === 'o' || str[char].toLowerCase() === 'u'){
            console.log(str[char]);
            count++;
        }
    }
    console.log(`Number of vowels: ${count}`);
}
let str = prompt("enter string");
countvowels(str);

// foreach loop in arrays

let arr1 =["delhi","mumbai","hyderabad","chennai"];
arr1.forEach((val , idx )=> {
    console.log(val,idx);
});

let nums1 = [2,3,4,5,6];
let calcsquare = (num) => {
    console.log(num * num);
};
nums1.forEach(calcsquare);

// map function in arrays

let nums2 = [2,3,4,5,6];
let newarr = nums2.map( (val) => {
    return val*2;
});

// filter 

let nums3 = [2,3,4,5,6];
let evennums = nums3.filter( (val) => {
    return val % 2 === 0;
});

// reduce 
let nums4 = [2,3,8,5,6];
let sum1 = nums4.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(sum1);



let marks = [97,64,32,49,99,96,86];
let toppers = marks.filter( (val) => {
    return val >= 90;
});
console.log(toppers);

let n = prompt("enter a number");
let arr =[];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sum2 = arr.reduce((res,curr) => {
    return res + curr;
})
console.log(`Sum of first ${n} natural numbers is: ${sum2}`);

let factorial = arr.reduce((res,curr) => {
    return res * curr;
});
console.log(`Factorial of ${n} is: ${factorial}`);
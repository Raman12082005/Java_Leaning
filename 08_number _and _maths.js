// const score = 400
// console.log(score);

// const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString());         // convert to string
// console.log(typeof(balance.toString())); // string
// console.log(balance.toString().length);  // 3
// console.log(balance.toFixed(2));         // used for precision

let num1 = 300.00000
// console.log(num1);            // 300
// console.log(num1.toFixed(2)); // 300.00
// num1 = 300.00001              
// console.log(num1);            // 300.00001
// console.log(num1.toFixed(2)); // 300.00

// num1 = 123.675
// console.log(num1.toPrecision(3)); // 124 -> it uses round off
// console.log(num1.toPrecision(2)); // 1.2e+2 -> don't use this type of precision
// console.log(num1.toPrecision(4)); // 123.7
// num1 = 123.456
// console.log(num1.toPrecision(3)); // 123

// let num2 = 100000000
// console.log(num2);                         // 100000000
// console.log(num2.toLocaleString());        // 10,00,00,000
// console.log(num2.toLocaleString('en-IN')); // 10,00,00,000 -> convert into indian system

// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324

// +++++++++++++++++++ MATHS +++++++++++++++++++++ //

// console.log(Math);            // Object [Math] {}
// console.log(Math.PI);         // 3.141592653589793
// console.log(Math.abs(-4));    // 4
// console.log(Math.round(4.3)); // 4
// console.log(Math.round(4.7)); // 5

// console.log(Math.ceil(4.7));  // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.sqrt(4)); // 2
// console.log(Math.sqrt(5)); // 2.23606797749979
// console.log(Math.sqrt(4.6)); // 2.1447610589527217
// console.log(Math.pow(5, 2)); // 25
// console.log(Math.min(1, 2, 3 , 5, 6)); // 1
// console.log(Math.max(1, 2, 3 , 5, 6)); // 6

// console.log(Math.random()); // give any value between 0 and 1
// console.log(Math.random()*10 + 1); // always greater than 1
// console.log((Math.random()*10) + 1); // always greater than 1
// console.log(Math.floor(Math.random()*10 + 1)); // always single digit output

let min = 10
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);





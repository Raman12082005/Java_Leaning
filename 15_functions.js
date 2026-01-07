console.log("M");
console.log("A");
console.log("N");
console.log("A");
console.log("V");

function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("V");
}
sayMyName()

function addtwoNumbers(num1, num2){ // num1, num2 are parameters
    console.log(num1 + num2);
    console.log(typeof(num1 + num2));
}
addtwoNumbers() // NaN, number
addtwoNumbers(2, 5) // 7, number -> 3 ans 7 are arguments
addtwoNumbers(2, "5") // 25, string
addtwoNumbers(2, "a")// 2a, string
addtwoNumbers(2, true) // 3, number
addtwoNumbers(2, null) // 2, number

let result1 = addtwoNumbers(3, 5) // 8, number
console.log("Result1: ",result1); // Result1: undefined

function additionoftwoNumbers(num1, num2){ // num1, num2 are parameters
    return num1 + num2;
}

let result2 = additionoftwoNumbers(4, 6)
console.log("Result2:", result2); // Result2: 10
console.log(typeof(result2)); // number


function loginUsserMessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    else return `${username} just logged in`
}
console.log(loginUsserMessage("Manav")); // Manav just logged in
console.log(loginUsserMessage()); // undefined just logged in,  undefined


function calculateCartPrice1(...num1){
    return num1
}
console.log(calculateCartPrice1(200, 300, 400, 500)); // [ 200, 300, 400, 500 ]

function calculateCartPrice2(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice2(200, 300, 400, 500)); // [ 400, 500 ]


// make a object
let user = {
    username: "Manav",
    price: 999
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}
handleObject(user) // Username is Manav and the price is 999

handleObject({
    username:"Raman",
    price: 199
}) // Username is Raman and the price is 199


let myArray = [100, 200, 300, 400]
function returnsecondelement(arr){
    return arr[1]
}
console.log(returnsecondelement(myArray)); // 200
console.log(returnsecondelement([300, 500, 400])); // 500






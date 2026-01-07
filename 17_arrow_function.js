let user = {
    username : "Manav",
    prive : 999,
    
    WelcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);/*
            {
            username: 'Manav',
            prive: 999,
            WelcomeMessage: [Function: WelcomeMessage]
            }
        */
    }
}

user.WelcomeMessage() // Manav , welcome to website
user.username = "Sam" // refrensed is changed
user.WelcomeMessage() // Sam , welcome to website
/*
{
  username: 'Sam',
  prive: 999,
  WelcomeMessage: [Function: WelcomeMessage]
}
*/


console.log(this); //{} -> empty object
// browser ke ander jo global object hai vo window object hai
// isiliye jab hum this ko browser mein print kerwayenge tab window show hoga


function one(){
    console.log(this);
    
}
one()
/*
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter]
}
*/


let two = function(){
    let username = "Manav"
    console.log(this.username);
    
}
two() // undefined


let three = () => {
    let username = "Manav"
    console.log(this.username);
    
}
three() // undefined


let four = () => {
    let username = "Manav"
    console.log(this);
    
}
four() // {}

// explecite statement -> when we uses return statement
let addtwo = (num1, num2) => {
    return num1 + num2
}
console.log(addtwo(3, 4)); // 7



// implecite return
// used when only one line of statement
let addthree = (num1, num2, num3) => num1 + num2 + num3 
console.log(addthree(3, 4, 5, 6)); // 12 -> take only atarting 3 values

// if curlybackkets are used than we have to use retunr statement
let addfour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) 
console.log(addfour(3, 4, 5, 6)); // 18


let adding = (num1, num2) => {username : "Manav"} 
console.log(adding(3, 4)); // undefined

let addition = (num1, num2) => ({username : "Manav"}) 
console.log(addition(3, 4)); // { username: 'Manav' }









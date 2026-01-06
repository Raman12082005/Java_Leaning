// Singelton Object - when made from constructor
// object.create


// when we declare as literal, then singleton is not formed
// object literals

let mySym = Symbol("key1")
let newSym = Symbol("key2")

let Jsuser = { // key : value
    name: "Manav",
    mySym: "myKey", // symbol is used but as a string
    [newSym]: "newKey", // symbol is used as a symbol
    "FullName": "Manav Yadav",
    age: 15,
    email: "manavraman@gmail.com",
    isLoggedIn: false ,
    LastLogginDay: ["Monday", "Wednesday"]
} 

console.log(Jsuser.email); // manavraman@gmail.com
console.log(Jsuser.LastLogginDay); // [ 'Monday', 'Wednesday' ]
console.log(typeof(Jsuser.LastLogginDay)); // object
console.log(Jsuser.LastLogginDay[1]); // Wednesday
console.log(typeof(Jsuser.LastLogginDay[1])); // string

console.log(Jsuser["email"]); // manavraman@gmail.com
console.log(Jsuser["FullName"]); // Manav Yadav -> can't be asscessed by dot now

console.log(Jsuser.mySym); // mykey
console.log(typeof(Jsuser.mySym)); // string instead of Symbol
console.log(Jsuser[newSym]); // newkey
console.log(Jsuser)
/*
{
  name: 'Manav',
  mySym: 'myKey',
  FullName: 'Manav Yadav',
  age: 15,
  email: 'manavraman@gmail.com',
  isLoggedIn: false,
  LastLogginDay: [ 'Monday', 'Wednesday' ],
  Symbol(key2): 'newKey'
}
*/
console.log(typeof(Jsuser[newSym])); // string instead of Symbol

Jsuser.email = "Manav@gmail.com" // value can be changed
console.log(Jsuser.email); // Manav@gmail.com

// how to freeze tha value of a object
// Object.freeze(Jsuser)
// Jsuser.email = "Manav@google.com" 
// console.log(Jsuser.email); // manavraman@gmail.com

Jsuser.greeting = function(){
    console.log("Hello JS User"); // 
}
Jsuser.greetingtwo = function(){
    console.log(`Hello JS User, ${this.name}`); // 
}

console.log(Jsuser.greeting()); // Hello JS User(from function) and undefined(from outer console.log)
console.log(Jsuser.greeting); // [Function (anonymous)]

console.log(Jsuser.greetingtwo()); // Hello JS User, Manav(from function) and undefinedundefined(from outer console.log)
console.log(Jsuser.greetingtwo); // [Function (anonymous)]




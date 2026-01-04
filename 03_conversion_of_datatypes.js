/* number -> string
18 => "18"
*/
let score = 33
console.log(score);
console.log(typeof score)
console.log(typeof(score))
console.log(typeof (score))

let valueInString = String(score)
console.log(score)
console.log(valueInString)
console.log(typeof valueInString)
console.log(typeof(valueInString))
console.log(typeof (valueInString))



/* string -> number
if string contains only integer then it will be converted to number
otherwise datatype will be converted but value will be NaN
*/
let value = "18abc"
console.log(value);                  // 18abc
console.log(typeof(value))           // string

let valueInNumber = Number(value)
console.log(valueInNumber)           // NaN => Not a Number
console.log(typeof valueInNumber)    // number



/* undefined -> number
undefined => NaN
but datatype will be changed
*/
let name = undefined
console.log(name);                  // undefined
console.log(typeof(name))           // undefined

let nameInNumber = Number(name)
console.log(nameInNumber)           // NaN => Not a Number
console.log(typeof nameInNumber)    // number


/* boolean -> number
false => 0
true => 1
*/
let post = true
console.log(post);                  // true
console.log(typeof(post))           // boolean

let postInNumber = Number(post)
console.log(postInNumber)           // 1
console.log(typeof postInNumber)    // number



/* null -> number
null => 0
*/
let temp = null;
console.log(temp)            // null
console.log(typeof temp)     // object

let check = Number(temp) 
console.log(check)           // 0
console.log(typeof check)    // number



/* string -> boolean
"" => false
"Manav" => true
*/
let isLoggedIn = ""
console.log(isLoggedIn)                           // ""
console.log(typeof isLoggedIn)                    //string

let booleanisLoggedIn = Boolean(isLoggedIn) 
console.log(booleanisLoggedIn)                    // false
console.log(typeof booleanisLoggedIn)             // boolean


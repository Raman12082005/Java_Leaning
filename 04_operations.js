let value = 3
let negvalue = -value
console.log(value)
console.log(negvalue)

console.log(2+2)
console.log(2-2)
console.log(2/2)
console.log(2*2)
console.log(2**3)
console.log(5%2)


// addition of string
let str1 = "Manav"
let str2 = " Raman"
let str3 = str1 + str2
console.log(str3);

console.log("Hello" + " Manav");
console.log("Hello" + " " + "Raman");


// don't think more about it
console.log("1" + "2");            // 12
console.log(typeof("1" + "2"));    // string
console.log("1" + 2);              // 12
console.log(typeof("1" + 2));      // string
console.log(1 + "2");              // 12
console.log(typeof(1 + "2"));      // string
console.log("1" + 2 + 2);          // 122
console.log(typeof("1" + 2 + 2));  // string
console.log(1 + 2 + "2");          // 32
console.log(typeof(1 + 2 + "2"));  // string

// avoid these types of operations in corporate
console.log(true)   // true
console.log(+true)  // 1
console.log(+"");   // 0


// avoid these types of operations in corporate
let gameCounter = 100
++gameCounter               
console.log(gameCounter);   // 101
gameCounter++
console.log(gameCounter);   // 102
console.log(++gameCounter); // 103
console.log(gameCounter++); // 103


// we also avoid this type of operation in corporate
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1);
console.log(num2);
console.log(num3);


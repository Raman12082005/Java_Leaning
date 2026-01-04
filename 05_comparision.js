console.log(2 > 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log(2 == 1);


// we avoid following types of conversions

console.log("2" > 1); // true

console.log(null > 0);  // false
console.log(null >= 0); // true (Comparision happen)
console.log(null == 0); // false (Equality check)
console.log(null < 0);  // false


// === -> it also checks datatypes
console.log("2" == 2);   // true
console.log("2" === 2);  // false



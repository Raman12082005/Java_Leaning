let myarr = [1, 2, 3, 4, 5]
console.log(myarr);            // [1, 2, 3, 4, 5]
console.log(typeof(myarr));    // objecct
console.log(myarr[1]);         // 2
console.log(typeof(myarr[1])); // number
console.log(myarr.length);        // 5


myarr = [1, 3, 5, 6, 7, true, "Manav"]
console.log(myarr);           // [1, 3, 5, 6, 7, true, "Manav"]
console.log(typeof(myarr));   // object
console.log(myarr[1]);        // 3
console.log(typeof(myarr[1]));// number
console.log(myarr[5]);        // true
console.log(typeof(myarr[5]));// boolean
console.log(myarr[6]);        // Manav
console.log(typeof(myarr[6]));// string
console.log(myarr.length);       // 7

myarr.push(7)
console.log(myarr);        // [ 1, 3, 5, 6, 7, true, 'Manav', 7 ]
console.log(myarr.length); // 8
myarr.pop()                
console.log(myarr);        // [ 1, 3, 5, 6, 7, true, 'Manav' ]


myarr.unshift(9)    // used to insert element at the staring of the array
console.log(myarr); // [ 9, 1, 3, 5, 6, 7, true, 'Manav' ]
myarr.shift()    // used to remove element from the staring of the array
console.log(myarr); // [ 1, 3, 5, 6, 7, true, 'Manav' ]

console.log(myarr.includes(true)); // true -> tell if the array includes the element or not
console.log(myarr.includes(5)); // true 
console.log(myarr.includes(15)); // false

console.log(myarr.indexOf(true)); // 5 -> tell the index of the element
console.log(myarr.indexOf(5)); // 2 
console.log(myarr.indexOf(15)); // -1 -> if the element is not present in the array

let newarr = myarr.join()
console.log(myarr);         // [ 1, 3, 5, 6, 7, true, 'Manav' ]
console.log(typeof(myarr)); // object
console.log(newarr);        // 1,3,5,6,7,true,Manav
console.log(typeof(newarr));// string

// slice and splice

console.log(myarr);
console.log("A ->", myarr); // A -> [ 1, 3, 5, 6, 7, true, 'Manav' ]

// 2nd index is not included in slicing
let arr1 = myarr.slice(1, 4)
console.log(myarr);          // [ 1, 3, 5, 6, 7, true, 'Manav' ]
console.log("B ->", myarr);  // B -> [ 1, 3, 5, 6, 7, true, 'Manav' ]
console.log(arr1);           // [ 3, 5, 6 ]

// 2nd index is included in splicing
// splicing remove the part from the original array
// and arr2 will get the removed part
let arr2 = myarr.splice(1, 4)
console.log(myarr);          // [ 1, true, 'Manav' ]
console.log("C ->", myarr);  // C -> [ 1, true, 'Manav' ]
console.log(arr2);           // [ 3, 5, 6, 7 ]








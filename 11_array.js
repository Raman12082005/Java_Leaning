let marvel_heroes = ["Thor", "Captain America", "Ironman"]
let dc_heroes = ["Superman", "Batman", "Aquaman"]

// marvel_heroes.push(dc_heroes); // value is just pushed in the array
// array inside a array
// console.log(marvel_heroes); // ['Thor', 'Captain America', 'Ironman', [ 'Superman', 'Batman', 'Aquaman' ] ]
// console.log(marvel_heroes[2]); // Ironman
// console.log(marvel_heroes[2][2]); // o
// console.log(marvel_heroes[3]); // [ 'Superman', 'Batman', 'Aquaman' ]
// console.log(marvel_heroes[3][2]); // Aquaman

// marvel_heroes.concat(dc_heroes);
// console.log(marvel_heroes);  //['Thor', 'Captain America', 'Ironman', [ 'Superman', 'Batman', 'Aquaman' ] ]


// marvel_heroes = ["Thor", "Captain America", "Ironman"]
// dc_heroes = ["Superman", "Batman", "Aquaman"]
// let all_heroes = marvel_heroes.concat(dc_heroes); // a new combines array is given
// console.log(all_heroes);  // ['Thor', 'Captain America', 'Ironman', 'Superman', 'Batman', 'Aquaman' ]


// marvel_heroes = ["Thor", "Captain America", "Ironman"]
// dc_heroes = ["Superman", "Batman", "Aquaman"]
// // spread operator -> as mush arrays can be used
// all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes);    // ['Thor', 'Captain America', 'Ironman', 'Superman', 'Batman', 'Aquaman' ]


// let new_arr = [1, 2, 3, [4, 5, 2], 7, 8, [3, 4, 2, [3, 4, [7, 8, 9], 6]]]
// // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// let another_arr = new_arr.flat(2)
// console.log(another_arr); // [ 1, 2, 3, 4, 5, 2, 7, 8, 3, 4, 2, 3, 4, [ 7, 8, 9 ], 6 ]

// another_arr = new_arr.flat(Infinity) 
// console.log(another_arr); // [ 1, 2, 3, 4, 5, 2, 7, 8, 3, 4, 2, 3, 4, 7, 8, 9, 6 ]


console.log(Array.isArray("Manav")); // false
console.log(Array.from("Manav")); // [ 'M', 'a', 'n', 'a', 'v' ]

// Intresting Case
console.log(Array.from({name : "Manav"})); // []


score1 = 100
score2 = 200
score3 = 300
// Array.of() -> Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]



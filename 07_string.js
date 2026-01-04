let name = "Manav"
let repoCount = 7

// try to aoid this method
console.log(name + " " + repoCount + " Raman");

// This is modern syntax try to use it instead of upper one
console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

// it gives more functions of string which can be accessed
let gamename = new String("Manav-Heroic")
console.log(gamename);
console.log(typeof gamename);
console.log(gamename[0]);
console.log(gamename[1]);
console.log(gamename[2]);
console.log(gamename[3]);
console.log(gamename[11]);
console.log(gamename.length);
console.log(gamename.toUpperCase);
console.log(gamename.toUpperCase()); // only change in copy not in original string
console.log(gamename[3]);
console.log(gamename.toLowerCase);
console.log(gamename.toLowerCase()); // only change in copy not in original string
console.log(gamename[0]);

console.log(gamename.charAt(2));    // which character at this index
console.log(gamename.charAt(5));
console.log(gamename.indexOf('n')); // tell this index is at which position
console.log(gamename.indexOf('a')); // output -> 1 & 2 (in different lines)
console.log(gamename.indexOf('k')); // -1
console.log(gamename.indexOf('-'));


let newString = gamename.substring(0, 5) // 5th index is not included
console.log(newString);     // Manav
newString = gamename.substring(-8, 30)
console.log(newString);
// substring will not negative values as slicing, it will simply start automatically from 0

gamename = "Manav-Heroic"
let anotherString = gamename.slice(0, 5) // same as substring
console.log(anotherString); // Manav

// always move from left to right in slicing
anotherString = gamename.slice(-5, -1) // we can also use -ve index in slicing
console.log(anotherString); // eroi

anotherString = gamename.slice(4, -3)
console.log(anotherString); // v-Her

anotherString = gamename.slice(-15, -1)
console.log(anotherString); // Manav-Heroi
anotherString = gamename.slice(3, 30)
console.log(anotherString); // av-Heroic


let extraString = "     Raman     "
console.log(extraString);
console.log(extraString.trim()); // it will teminate all the extra spaces from end and starting
console.log(extraString.trimStart()); // it will teminate all the extra spaces only from starting
console.log(extraString.trimEnd()); // it will teminate all the extra spaces only from ending


let moreString = "RamanManav@gmail.com"
console.log(moreString);
console.log(moreString.replace('com', 'ac.in')); // used to make changes in string in stack space
console.log(moreString);
console.log(moreString.includes('Manav'))  // true
console.log(moreString.includes('Rewari')) // false


let splitString = "Raman - Manav - Mahendergarh"
console.log(splitString.split('-')); // array will be from by splitting on the bases of given argument





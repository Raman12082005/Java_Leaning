let a = 20
const b = 30
var c = 40

console.log(a); // 20
console.log(b); // 30
console.log(c); // 40


// var can be used on out of scope that is why we don't use it
if(true){
    var d = 500
}
console.log(d); // 500


function one(){
    let username = "Manav"

    function two(){
        let website = "youtube"
        console.log(username);
    }
    // console.log(website); // error -> website is out of scope

    two() // just function one() is declared nothing is called
    // two() is not called here it is just declared inside one()
    // when one() is called then two() is called, then console.log() print sonthing
}
one() // Manav


if(true){
    let username = "Raman"
    if(username === "Raman"){ // it checks both, datatype as well as value
        let website = " GFG"
        console.log(username + website); // Raman GFG
    }
    // console.log(website); // error -> website is out of scope 
}
// console.log(username); // error -> username is out of scope


/* ++++++++++++++++++ Intresting ++++++++++++++++++ */

console.log(addone(5)); // 6 -> function called
function addone(num){ // just declared
    return num + 1;
}


let addtwo = function(num){
    return num + 2
}
console.log(addtwo(6)); // 8 -> function called


console.log(addthree(6)); // error -> addthree is declared after called
let addthree = function(num){ // this is a expression alsoin terms of addthree
    return num + 2
}


















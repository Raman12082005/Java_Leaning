// Immediately Invoked Function Expressions (IIFE)
/* Global scope ke pollution se problem hoti hai kyi baar, to global scope
    ke varibles hai ya jo bhi vaha declared hai, uske pollution ok hattane 
    ke liy humne IIFE ka use kiya */


function one(){
    console.log(`DB CONNECTED`);
}
one() // DB CONNECTED


// ()() -> first for function call and second for execution
// named IIFE when the name of the function is given
;(function two(){
    console.log(`DB CONNECTED`);
})(); // DB CONNECTED
// always use semicolan at stating and ending of IIFE, then your code will never shows error


// simple IIFE or unnamed IIFE-> because no name is given
;( () => {
    console.log(`DB IS CONNECTED`);
})(); // DB IS CONNECTED



;( (name) => {
    console.log(`DB IS CONNECTED, ${name}`);
})("Manav"); // DB IS CONNECTED, Manav























const account_Id = 20241104
let accountEmail = "raman@gmail.com"
var accountPassword = "12345"
account_City = "Maherdergarh"
let account_State;


// account_Id = 2 (not allowed)

accountEmail = "manav@gmail.com" // (allowed)

accountPassword = "54321" // (allowed)

account_City = "Rewari" // (allowed)

/* we will only use let instead of var because in let the
problem of block... is resolved but not in var */ 

// console.log(account_City);

console.table([accountEmail, accountPassword, account_City, account_State])


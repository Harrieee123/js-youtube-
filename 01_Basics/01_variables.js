const accountId = 112345
let accountEmail = "aaditya.pathak2004@gmail.com"
var accountPassword = "12345"
accountcity ="jaipur"

//accountId = 2 // it will give error since constant is permanent 
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

accountEmail = "shikhaspathak28@gmal.com"
accountPassword = "6767"
accountcity = "bengal"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountcity])


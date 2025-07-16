/* Prefer nont to use var
because it has function scope and can lead to unexpected behavior.
*/
const accountId = 144553;
let accountEmail = "abc@gmail.com";
var accountpassword = "12345";
accountCity = "New York";

// accountId = 2; not alloed as const variables cannot be reassigned

// console.log(accountId);

accountEmail = "aa@gmail.com";
accountpassword = "45454545";
accountCity = "Los Angeles";

console.log([accountId, accountEmail, accountpassword, accountCity]);

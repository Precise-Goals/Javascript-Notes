// Expressions and Operators
// Operand +(operator) Operands = Expression

// Types of Operators
/*
    1. Assignment operator
    2. Arithmetic operator
    3. Comparison operator
    4. Logical operator
    5. string operator
    6. Unary operator
    7. Ternary operator
    8. type operator

*/

//age
var age = 80;
var isAdult = false;
if (age >= 18) {
  isAdult = true;
} else {
  isAdult = false;
}

console.log(isAdult ? "Boy is Legal" : "Boy is not legal");
console.log();

var ctz_age = 80;
var isCitizen = true;
var isRegistered = true;

if (ctz_age >= 18 && isCitizen && isRegistered) {
  console.log("Ctzen is Able to Vote.");
} else if (ctz_age >= 18 && isCitizen && isRegistered == false) {
  console.log("Cant Vote Due to Registration Issues");
} else if (ctz_age >= 18 && isCitizen == false) {
  console.log("Cant Vote due to Citizenship status");
} else if (ctz_age < 18) {
  console.log("Voter is Younger");
}

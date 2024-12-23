// Concatenation
// + only used for addition but in javascript it can be use for adding two strings,
// when + operator is used it adds two strings called as concates and operation is known as Concatenation

var concate = "Fluffy " + "Billa";
console.log(concate);

// Type Coercion
// fundamental part of javascript used to ake code more readable and flexible along with efficient.
// two types of coercion
//      1. Implicit Coercion:
//          Coercion happens automatically
//      2. Explicity Coercion:
//          Coercion intentionally done by us
// coercion may leads to unexpected results
let sum = "billu" - 5;
let sumo = "5" - 10;
let sumos = "5" + 10;
console.log(sum);
console.log(sumo); // negative signs directly substracts the content
console.log(sumos);

console.log(10 + "20");
console.log(9 - "5");
console.log("NMIET " + "Kolig");
console.log(" " + " "); // "  "
console.log(" " + 0); // " 0"
console.log("Placements" - "NMIET"); // not a number
// ille sarrrr, placements nahi dete (companies nahi ati)
console.log(true + true); // 1 + 1
console.log("Numbers of Student Placed :", true - true); // 1 - 1
console.log(false + false); // 0 + 0
console.log(true - false); // 0 - 1
console.log(false - true); // 0 - 1

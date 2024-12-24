var num = "89";
if (num % 2 === 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}
console.log();
var n = -34;
if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
console.log();
var a = 100;
switch (a) {
  case 6:
    console.log("behtarin Chakka, Stadium ke bahar.");
    break;
  case 4:
    console.log("Balla ghuma hai, Chauka laga hai.");
    break;
  case 50:
    console.log("Ballebaaz Adha Shatak Pura Karte hue.");
    break;
  case 100:
    console.log("Batsman Finishes off in a style.");
}
console.log();

var shape = "square";
var r = 7;
var w = 12;
var l = 7;

switch (shape) {
  case "square":
    console.log("Area of Square :", l * l);
    break;
  case "circle":
    console.log("Area of Circle :", 2 * 3.14 * r);
    break;
  case "rectangle":
    console.log("Area of Reactangle :", w * l);
    break;
  default:
    console.log("No defined Shape");
    break;
}

console.log();

var cbum = 1;
var sum = 0;
do {
  console.log(cbum);
  sum += cbum;
  cbum++;
} while (cbum <= 10);
console.log("sum is", sum);
console.log();
for (var j = 1; j <= 10; j++) {
  console.log(j);
}
console.log();
var cc = 1;
while (cc <= 10) {
  console.log(cc * 5);
  cc++;
}
console.log();
var check = 1223;
var isPrime = true;
for (var index = 2; index < Math.sqrt(check); index++) {
  if (check % index === 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Number is the Prime Number");
} else {
  console.log("Number is the not Prime Number");
}
console.log();
//leap year
var year = 2024;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year, "is a Leap Year");
} else {
  console.log(year, "is not a Leap Year");
}

for (var i = 0; i < 5; i++) {
  var ptrn = "";
  var sptrn = "";
  for (var j = 0; j <= i; j++) {
    ptrn += " * ";
  }
  for (var j = 5 - i - 1; j > 0; j--) {
    ptrn += " - ";
  }
  console.log(ptrn);
}
console.log();
var midX = Math.floor(5 / 2);
var midY = Math.floor(5 / 2);
for (let l = 0; l < 5; l++) {
  var ptrn = "";
  for (let m = 0; m < 5; m++) {
    if (l == midX || m == midY) {
      ptrn += " * ";
    } else {
      ptrn += "   ";
    }
  }
  console.log(ptrn);
}

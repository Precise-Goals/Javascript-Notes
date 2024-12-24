// let is a keyword with block scope, its value can be changed, its mutable
// const declare the variable with block scope, once value assigned it cant be reassigned,immutable;

(function areaOfCircle(r) {
  const pi = 3.1459;
  let area = pi * r * r;
  console.log("Radius :", r);
  console.log("Area of Circle :", area);
  return area;
})(1);

console.log();

let name = "Sarthak";
if (true) {
  const name = "Patil";
  console.log(name);
  // scope of name in block
}
console.log(name);

console.log();

let frst = "Sarthak ";
let lst = "Patil";
let fn1 = frst + lst;
let fn2 = `${frst}${lst}`;
console.log(fn1);
console.log(fn2);

console.log();

function sum(a = 8, b = 10) {
  // default parameters
  return a + b;
}
console.log(sum(78, 43));
console.log(sum(78)); //NaN

console.log();

// fat arrow function

const fatsum = (a, b) => {
  console.log(`Sum of ${a} and ${b} is ${a + b} `);
  return a + b;
};
fatsum(65, 5);

const fats = (a) => `square of ${a} is ${a * a}`;
console.log(fats(5));

console.log();

const Calculator = (a, b, c) => {
  switch (c) {
    case "+":
      console.log(`The Addition of ${a} and ${b} is ${a + b}`);
      return a + b;
      break;
    case "-":
      console.log(`The Addition of ${a} and ${b} is ${a - b}`);
      return a - b;
      break;
    case "*":
      console.log(`The Addition of ${a} and ${b} is ${a * b}`);
      return a * b;
      break;
    case "/":
      console.log(`The Addition of ${a} and ${b} is ${a / b}`);
      return a / b;
      break;
    case "%":
      console.log(`The Addition of ${a} and ${b} is ${a % b}`);
      return a % b;
      break;
    default:
      console.log("Provide Proper function Call.");
      break;
  }
};

Calculator(54, 43, "+");
Calculator(54, 43, "12");
Calculator(54, 43, "-");
Calculator(54, 43, "/");
Calculator(54, 43, "%");

console.log();

let str = "HELLO";
console.log(`${str.length}`);

console.log(`${str[4]}`); // so this is inbuilt character array
const rev = (a) => {
  let sz = a.length;
  let ans = "";
  for (let i = sz - 1; i >= 0; i--) {
    ans += a[i];
  }
  return ans;
};

console.log(`${rev("Nutan Kolig Of Engineering")}`);
// gnireenignE fO giloK natuN

const isPalindrome = (a) => {
  let val = false;
  let revs = "";
  let i = a.length - 1;
  while (i >= 0) {
    revs += a[i];
    i--;
  }
  if (a === revs) {
    val = true;
    return "Yes, the string is a Palindrome";
  } else {
    return "No, the string is not a Palindrome";
  }
};

console.log(isPalindrome("radar"));
console.log(isPalindrome("openai"));
console.log(isPalindrome("icici"));

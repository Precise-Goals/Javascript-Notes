{
  /*
        1. Primitive Data Types
            string : sequence of characters stored in "" or ''
            number : numeric Values
            boolean : logical entity with 2 outcomes True or False (lowercase)
            undefined : absence of value of value of noninitialized variable 
            null : explicity indicate that variable has no value
            bigint : integers of arbitary precision
                eg : 34205694782379238462784629n;
                    n is used to indicate that value is bigint
            symbol : represents the unique and immutable data Type
        2. User Defined Data types
            Object
            Array
            Date
    

        - Famous Interview Questions ?
            1. Difference between null and not defined ?
            2. purpose of typeof operator ?
                console.log(typeof Name)
            3. type of null is object
            4. primitive data types
            5. convert string to number
                positive sign before number
    */
}

var snake = "She";
console.log(snake);
console.log(typeof snake);
console.log();

var Gaurav = 12;
var lol = `${Gaurav}`;
console.log(lol);
console.log();

var myFeelings = null;
console.log(typeof myFeelings);
console.log();

var number = "143";
console.log(number);
console.log(typeof number);
console.log(typeof +number);

console.log();
var string = 1432;
console.log(string);
console.log(typeof string);
console.log(typeof (string + " "));
console.log(typeof String(string));

console.log();
str = "";
// false, zero, empty string, null gives non truthy value
if (str) {
  console.log("This is a Truthy Value due to non empty string.");
} else {
  console.log("This is not a Truthy Value");
}
console.log();

/// PARSING INT AND PARSING FLOAT
// both parse int and pars float are functions Used
// to convert the string into numbers, but both of them have different
// use cases
// parseInt : Used to parse a string and convert it into integer ( whole Number ) and ignores
//              after the decimal point
// parseFloat : while parseFloat is used to convert the string into integer without ignoring the decimal part.
// both functions will try to convert the strings untill the invalid characters are there
const mystring = "42";
console.log(typeof mystring);
const num = parseInt(mystring);
console.log(num);
console.log(typeof num);
console.log();
const newstr = "45.5";
const num1 = parseFloat(newstr);
console.log(num1);
console.log(typeof (num1 + 0.1));
// NaN error occurs when you dont contain the number into input string for parsing

console.log();
console.log(parseInt('Lays'));
console.log(parseInt('#@$*'));
if((NaN === NaN)){
    console.log(true);
} else{
    console.log(false);
}
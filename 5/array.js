// arrays are linear Data structure
let listOfStudents = ["Sarthak", "Gaurav", "LOL", "Retarded Classmate"];
console.log(listOfStudents[0]);
console.log(listOfStudents.at(-1));
console.log(listOfStudents.at(-3));
console.log();

let yummy = ["chicken", "Aloo", "Popcorn", "Mess ka Khana 🤡 "];
console.log(`${typeof yummy}`); // its an Object
console.log(`${yummy}`); // Content separated by non space kommas
console.log(yummy); // array pura

console.log("");
let yum = new Array("Triple Noodles", "Bread Pattice");
console.log(`${yum[1]}`);

let foods = ["chicken", "Aloo", "Popcorn", "Mess ka Khana 🤡 "];
foods[2] = "Biryani";
console.log(foods);

for (let item of foods) {
  console.log(item);
}
// returns the values stored at certain indexes
for (let item in foods) {
  console.log(item);
}
// returns the indexes

// for each
const myforEachFood = foods.forEach((currElement, index, foods) => {
  return `${index + 1} - ${currElement}`; // bahar nahi use kar sakte
});

console.log(myforEachFood); // undefined

const lol = foods.map((currElement, index, foods) => {
  return `${index} - ${currElement}`;
});

console.log(lol); // make the new array

console.log("");

let err = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newErr = err.map((currElement, index, newErr) => {
  return `${currElement * 2}`;
});
console.log(newErr);

// foreach doesnt return the value and it used for iterating over the elements and and performing side effects.
// map returns the new array results of applying the functions to original array while original array remains unchanged

// foreach doesnt return value it cant be chained with other array methods
// map returns new array so the Values can be chained with other array methods

// if we dont need new array use foreach
// if we need a new array use map

// CRUD
// add element to array from end push(value)
// remove element from array pop(value)
foods.push("Rajma Chaval");
foods.push("Misal Pav");
console.log(foods);
foods.pop("Misal Pav");
console.log(foods);
// add element to array start unshift(value)
foods.unshift("Soya Chilli 65");
console.log(foods);
// remove the first element from array shift(value)
foods.shift("Soya Chilli 65");
foods.shift("chicken");
console.log(foods);

let Cricket = ["Rohit", "Virat", "Dhoni", "Abdul", "KANE", "Osama"];
// splice(start, deleteCount, val1, val2, val3, val4,........, valn);
// console.log(Cricket.splice(2));
//  splice let skips the first element in new array which it returns
// console.log(Cricket.splice());
// if left empty it returns new empty array
// console.log(Cricket.splice(1, 2, "Boult")); // subtitute
// from 3 position removed the 2 elements
// console.log(Cricket);

// add a player "Ramlal" at end who missed his bus
Cricket.splice(-1, 0, "Ramlal"); // adds before the -1th element ie last
Cricket.splice(-1, 1, "Godse"); // replaces the last element
console.log(Cricket);

// indexof(val) provides the search index for the value 'val'
// includes(val) provides true or false whether element is in array or not

let facebook = [
  2, 32, 543, 6576, 74, 4532, 43, 68, 53, 23, 7632, 245, 43, 79, 54, 25, 756,
  56,
];

console.log(facebook.indexOf(43)); // first occurance
console.log(facebook.lastIndexOf(43)); // last occurance searches from backwards
console.log(facebook.lastIndexOf(43, 8)); // last occurance searches from backwards
// lastIndexOf(val,startingPositionFromBackward)
console.log(facebook.includes(74));
console.log("");

let months = ["Jan", "Feb", "march", "April", "May", "June"];
// add dec at end of array
months.push("Dec");
// update march to March
months.splice(2, 1, "March");
// Delete June from array
months.splice(5, 1);
console.log(months);

const numbers = [1, 2, 3, 5, 4, 6, 7, 8, 6, 9];
let res = numbers.find((currElement) => {
  return currElement > 5;
});

// starting from start, value who satisfies the condition is returned.
console.log(res);

let resi = numbers.findIndex((curr) => {
  return curr < 7;
});
console.log(resi);

let resf = numbers.filter((curre) => {
  return curre > 4;
});

// returns the array of all values satisfying the conditions from original array
console.log(resf);

const cart = [54, 64, 23, 56, 64, 78, 98, 65, 35];
// remove the 64th item
let updatedCart = cart.filter((currElement) => {
  return currElement != 64;
});
console.log(updatedCart);

const Products = [
  { name: "laptop", price: 900 },
  { name: "Mobile", price: 400 },
  { name: "Tablet", price: 600 },
  { name: "Ipod", price: 200 },
];

// return the array of products whose prices are less than 500

var result = Products.filter((currElement) => {
  return currElement.price < 500;
});
console.log(result);

const n = [54, 64, 23, 56, 64, 78, 98, 65, 35];
// make every elem as unique values
let newres = n.filter((curr, i, n) => {
  return n.indexOf(curr) === i;
});

console.log(newres);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sqNum = numArr.map((cE, i, Ar) => {
  return cE * cE;
});
console.log(sqNum);

let evenSq = numArr
  .map((cE) => {
    return cE % 2 === 0 ? cE * cE : 0;
  })
  .filter((curr) => {
    return curr != 0;
  });
console.log(evenSq);

const names = ["Ram", "Sham", "Amar", "Akbar", "Anthony"];
let namesCapitalized = names.map((crr) => {
  return crr.toUpperCase();
});
console.log(namesCapitalized);

let Respect = names.map((currElm) => {
  return `Mr. ${currElm}`;
});

// let Respect = names.map((c) => `Mr. ${c}`);
console.log(Respect);

// Reduce Method
// Reduce method is used to accumulate and reduce the array to single value it iterates over the array
// and applies a callback function to each elements in the array. updating the accumulator value with the result

// RETURN THE TOTAL PRICE
const pdts = [
  { name: "laptop", price: 900 },
  { name: "Mobile", price: 400 },
  { name: "Tablet", price: 600 },
  { name: "Ipod", price: 200 },
];

let totalPrice = pdts.reduce((Total, currElement, index, array) => {
  return Total + currElement.price;
}, 0);

console.log(totalPrice);

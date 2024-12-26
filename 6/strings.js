let i = "Hello World, I am Sarthak";
console.log(i.length); // gives length including spaces

// excape characters allows to use special characters like \ ' "
console.log('" Hello "');
console.log("\\ Backslash");
console.log("'Hello So I was saying, I forgot what i was Saying, \"Damnn\"'");

// indexOf method which either gives index of first occurence of the first letter of string or returns -1 if not found;
var Poetry =
  "Thy love is such I can no way repay The heavens reward thee manifold, I pray.";
// Its Case sensitive Method

console.log(Array.from(Poetry).map((cE, I) => `${cE} - ${I}`));
let getf = Poetry.indexOf("repay");
console.log(getf);
// lastindexOf method which either gives index of first occurence from last of the first letter of string or returns -1 if not found;
let getl = Poetry.lastIndexOf("I");
console.log(getl);

// search method returns the position of match
console.log(Poetry.search("Love"));
console.log(Poetry.search(/Love/i)); // to trigger the flag so that it avoid case sensitiveness
// it returned -1;

// returns the index of first letter of targetted string else returns -1 if not found;

// Match Method
// returns the array of match values or null if no match is found

let Philo =
  "All my Victories are belong to God and All my loses are mine alone.";
console.log(Philo.match("victories")); // -1 case sensitive
console.log(Philo.match(/are/gi)); // provides array with frequency

// matchall method
// returns an iterator of all match, providing detailed information about match
// returns empty iterator if no match is found
console.log(...Philo.matchAll("are"));
// converts into global flag /g too
for (let i of Philo.matchAll("All")) {
  console.log(i);
}

// includes : its es6 feature and case sensitive returns true if string contains specific value

console.log(Philo.includes("Victories"));
console.log(Philo.includes("victories")); // case insensitive
console.log(Philo.includes("Victor")); // it finds in character array
console.log(Philo.includes("Victory"));

// substring
// startswith : returnss true if strings start with specified value
// endswith : returnss true if strings end with specified value

const catAdapt =
  "We may then conclude that the habit of concealing themselves by day came first, and that the brown color is a later adaptation.";

console.log();
console.log(catAdapt.startsWith("We")); // word / value
console.log(catAdapt.startsWith("The"));

console.log(catAdapt.endsWith("."));
console.log(catAdapt.endsWith("adaptation"));

const Th = "Cut the Memories of the past, you future is ahead waiting for you";
// slice cuts the string from startindex to endindex but resultant last char is endindex-1
console.log(Th.slice(10, 20));
console.log(Th.substring(10, 20)); // same stuff
console.log(Th.slice(-7)); // works backwords too

// at
// it allows negative indexes while charAt not
console.log(Th.at(-3)); // gives character at this index

console.log(Th.slice(2)); // 2 tak chorke age ka dedega data
console.log(Th.replace("Memories", "Pain"));
console.log(Th.substring(1));

// charAt position of given character but only handles positive indexed values
console.log(Th.charAt(5));
//charCodeAt returns the utf code of character
console.log(Th.charCodeAt(5)); // ascii

let woorld = "You were my World, jokes on you, were is past";
console.log(woorld.replace(/you/gi, "Everything")); // case insensitive
console.log(woorld.toUpperCase());
console.log(woorld.toLocaleLowerCase());

let space = "                      pacchiss bigha Jaminn                     ";
console.log(space.trim());
let s = "Sky,well,sun,moon";
console.log(s.split(","));
// returns the array of splitted words 
console.log(s.split()); // returns the original string into array

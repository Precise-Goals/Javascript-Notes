// a to z
// 97 + 25

console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));

const radiant = () => {
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    console.log(String.fromCharCode(i));
  }
};

radiant();

let vowels = "aeiou";
const vow = (st) => {
  let count = 0;
  for (let i of st) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
};

console.log(vow("Are you Fine"));

console.log();

const check = (st) => {
  for (let ch of vowels) {
    if (!vowels.includes(ch)) {
      return false;
    }
  }
  return true;
};

console.log(check("Hello World, I am New to Programmer"));
console.log(check("Hello World"));

// pangram is where all alphabelt present in string

const pangram = (string) => {
  let inp = string.toLowerCase().split("");
  const val = inp.filter((cE) => {
    return (
      cE.charCodeAt() >= "a".charCodeAt() && cE.charCodeAt() <= "z".charCodeAt()
    );
  });
  console.log();
  console.log(string);
  console.log(val);
  return [...new Set(val)].length === 26 ? true : false;
};
console.log(pangram("qwertyuiopasdfghjklzxcvbnm"));

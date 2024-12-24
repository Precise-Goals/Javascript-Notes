function sum(a, b) {
  return a + b;
}
console.log(sum(65, 76));
console.log(sum(65, 754));
console.log(sum(65, 564));

function greet(a) {
  console.log("Good morning", a, "!");
}

greet("Sarthak");
greet("bhai");
greet("Ubuntu");

/*
    function function_name(parameter){
        // Block of code
        return statement or ();
    }

 */

// functinos expressinos
var pranam = function greet(g) {
  console.log("Pranam", g, "apka swagat hai");
};
pranam("Gunjan");

// function expresions can be created anonymously
var yummy = function (food) {
  console.log(food, "is Yummy");
};
yummy("Chiken Triple Fried Rice");
// IIFE: Immediately Invoked Functions Expressions
// automatically call at same time declared

(function Hello() {
  console.log("Bhai KhammaKhani Kaise ho !");
})();
// called at same time.

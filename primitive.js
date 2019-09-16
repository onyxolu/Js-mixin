

// Primitive value is a string, boolean, number, null, undefined, symbol and biginit
// It is not an object and has no method

var bar = "baz";

bar.toUpperCase();  
console.log(bar); // baz

// another example

// The Primitive 
let foo = 5;

// Defining a function that should change the Primitive value
function addTwo(num) {
   num += 2;
}
// Another function trying to do the same thing
function addTwo_v2(foo) {
   foo += 2;
}
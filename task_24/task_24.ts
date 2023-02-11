// Test for string
let place = "lahore";
console.log("Is place lahore? I predict True");
console.log(place == "lahore");

let university = "NUST";
console.log("Is university Nums? I predict false");
console.log(university == "Nums");

// Test using lower case function
let place_1 = "Lahore";
console.log("Is place lahore? I predict True");
console.log(place_1.toLowerCase() == "lahore");

let university_1 = "NUST";
console.log("Is university Nums? I predict false");
console.log(university.toLowerCase() == "Nums");

// Numerical test
console.log("Is 5 > 7 ? I predict false");
console.log(5 > 7);
console.log("Is 5 < 7 ? I predict true");
console.log(5 < 7);
console.log("Is 5 <=7 ? I predict true");
console.log(5 <= 7);
console.log("Is 5 >= 7 ? I predict false");
console.log(5 >= 7);

// Test using and & , or || operators
console.log("True && False ? False");
console.log(true && false);
console.log("True && True ? True");
console.log(true && true);

console.log("false || False ? false");
console.log(false || false);
console.log("True || false ? True");
console.log(true || false);

let arr = [1, 2, 3, 4, 5];
// Test whether an item is in an array
console.log("Is 2 is in an array? True");
console.log(arr.find((num) => num == 2) ? true : false);

// Test whether an item is not in an array
console.log("Is 8 is in an array? false");
console.log(arr.find((num) => num == 8) ? true : false);

/* CHALLENGE 1: var, let and const */

const fullName = "Mandla Sikhosana"; // I used const because my name will not change it is my name and it will always be my name.

let age = 25; // I used let because my age will change every year and I will have to update it.

let  isEnjoyingJavaScript = true; // I used let for the boolean because this variable can change depending on my mood and how I feel about JavaScript.

let favouriteTemperature = 18.5; // I used let because my favorite temperature might change over time, this stores decimal values and can be updated.

const notANumber = Number("Thanks"); //Number: Number("Thanks") cannot be converted into a valid number, so JavaScript produces the special value NaN.

const infiniteValue = 1/0; // dividing a posotive number by zero produces Infinity.

let maximumSafeIntenger = Number.MAX_SAFE_INTEGER; //this is the largest integer that JavaScript can safely represent.

const emptyValue = null; // I used cosnt because the variable itself will not be reassigned and this represents the absence of a value


// Outputting all 8 variables.

console.log("Full name:", fullName);
console.log("Age:", age);
console.log("Is enjoying JavaScript:", isEnjoyingJavaScript);
console.log("Favourite temperature:", favouriteTemperature);
console.log("NaN value:", notANumber);
console.log("Infinity value:", infiniteValue);
console.log("Maximum safe integer:", maximumSafeIntenger);
console.log("Null value:", emptyValue);

/* The single and most important difference between var and let is var is function-scoped,
while let is block-scoped. This means let is safer to use inside blocks
such as if statements and loops because it stays inside that block.
*/

/* I should normally use const because it prevents me from accidentally
reassigning a variable. I should use let when I know that the value
needs to change later in the program.*/

/* Using abbreviated words when naming a variable is not recommended because they are not discriptive and sometimes may be diffucult to understand and maintain.*/

//=====================================================================================================
/* CHALLENGE 2: typeof operator */
console.log("\n =========================================================================================")
// We are checking the data types of the variables we created in challenge 1 using the typeof operator.

console.log("Data type of fullName:", typeof fullName); // string

console.log("Data type of age:", typeof age); // number

console.log("Data type of isEnjoyingJavaScript:", typeof isEnjoyingJavaScript); // boolean

console.log("Data type of favouriteTemperature:", typeof favouriteTemperature);

console.log("typeof notANumber:", typeof notANumber);

console.log("typeof infiniteValue:", typeof infiniteValue);

console.log("typeof maximumSafeInteger:", typeof maximumSafeInteger);

console.log("typeof emptyValue:", typeof emptyValue);

// Checking other typeof data

console.log("typeof undefined:", typeof undefined);

console.log("typeof null:", typeof null);

console.log("typeof NaN:", typeof NaN);

console.log('typeof "42":', typeof "42");

console.log("typeof (typeof 42):", typeof (typeof 42));

console.log("typeof [1, 2, 3]:", typeof [1, 2, 3]);

console.log("typeof function() {}:", typeof function () {});

/* typeof NaN returns "number". Even though NaN means
"Not-a-Number", because it a special value in the JavaScript number type.*/

/*typeof (typeof 42) returns "string" because the first typeof 42
returns the string "number". The second typeof checks the type
of that returned value, which is a string.*/

/* typeof [1,2,3] returns "object" because arrays are objects in JavaScript.*/

//===============================================================================
// CHALLENGE 3 - Converting a string to a number
console.log("\n====================================================================================================================================================")
// The 8 given values to convert

let a = "123";
let b = "3.14";
let c = "hello";
let d = "42abc";
let e = "";
let f = 0;
let g = null;
let h = undefined;

// a = "123"

console.log("Number:", Number(a), typeof Number(a));
console.log("parseInt:", parseInt(a), typeof parseInt(a));
console.log("parseFloat:", parseFloat(a), typeof parseFloat(a));
console.log("Boolean:", Boolean(a), typeof Boolean(a));
console.log("String:", String(a), typeof String(a));

// b = "3.14"

console.log("Number:", Number(b), typeof Number(b));
console.log("parseInt:", parseInt(b), typeof parseInt(b));
console.log("parseFloat:", parseFloat(b), typeof parseFloat(b));
console.log("Boolean:", Boolean(b), typeof Boolean(b));
console.log("String:", String(b), typeof String(b));

// c = "hello"

console.log("Number:", Number(c), typeof Number(c));
console.log("parseInt:", parseInt(c), typeof parseInt(c));
console.log("parseFloat:", parseFloat(c), typeof parseFloat(c));
console.log("Boolean:", Boolean(c), typeof Boolean(c));
console.log("String:", String(c), typeof String(c));

// d = "42abc"

console.log("Number:", Number(d), typeof Number(d));
console.log("parseInt:", parseInt(d), typeof parseInt(d));
console.log("parseFloat:", parseFloat(d), typeof parseFloat(d));
console.log("Boolean:", Boolean(d), typeof Boolean(d));
console.log("String:", String(d), typeof String(d));

// e = ""

console.log("Number:", Number(e), typeof Number(e));
console.log("parseInt:", parseInt(e), typeof parseInt(e));
console.log("parseFloat:", parseFloat(e), typeof parseFloat(e));
console.log("Boolean:", Boolean(e), typeof Boolean(e));
console.log("String:", String(e), typeof String(e));

// f = 0

console.log("Number:", Number(f), typeof Number(f));
console.log("parseInt:", parseInt(f), typeof parseInt(f));
console.log("parseFloat:", parseFloat(f), typeof parseFloat(f));
console.log("Boolean:", Boolean(f), typeof Boolean(f));
console.log("String:", String(f), typeof String(f));


//g = null

console.log("Number:", Number(g), typeof Number(g));
console.log("parseInt:", parseInt(g), typeof parseInt(g));
console.log("parseFloat:", parseFloat(g), typeof parseFloat(g));
console.log("Boolean:", Boolean(g), typeof Boolean(g));
console.log("String:", String(g), typeof String(g));

//h = undefined

console.log("Number:", Number(h), typeof Number(h));
console.log("parseInt:", parseInt(h), typeof parseInt(h));
console.log("parseFloat:", parseFloat(h), typeof parseFloat(h));
console.log("Boolean:", Boolean(h), typeof Boolean(h));
console.log("String:", String(h), typeof String(h));

/* Number("42abc") returns NaN because the whole value cannot be converted
into a number. parseInt("42abc") returns 42 because it reads the number
from the beginning of the string.*/

/*I would use parseFloat when I need a decimal number. For example,
parseFloat("3.14") returns 3.14, while parseInt("3.14") returns 3.*/

/*Number("") returns 0. This confusing because it is supposed to return not a number*/


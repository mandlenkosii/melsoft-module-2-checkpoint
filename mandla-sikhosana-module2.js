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


//=======================================================================================================================================
// CHALLENGE 4 - What does this print? And why?
console.log("\n=================================================================================================================")

/* "5" + 3
a. Prediction : error
b. type : error
c. because from my understanding the addition operator can only work on data types of the same kind.
d. results : it printed 53 meaning it can add a string and a Number.*/
console.log("5"+ 3);

/*
a. Prediction : 2
b. type : number
c. because the - operator converts the string "5" into a number.*/
console.log("5"-3);

/* "5" * "2"
a. Prediction : 10
b. type: number
c. same reason because the * operator gets to convert both strings into numbers*/
console.log("5" * "2");

/* true + 1
a. Prediction : 2
b. type - number
c. I think Javascript will convert or take true as 1 when doing numeric addition*/
console.log(true + 1);

/* true + "1"
a. Prediction : not sure but since are both strings the will be just combined
b. type: string*/
console.log(true + "1");

/* false + null
a. Prediction : 0
b. number
c. because both represent zero when it comes to numeric addition/conversion*/
console.log(false + null);

/* null + undefined
a. Prediction: NaN
b. type : NaN
c. because undefined cannot be converted into a valid number*/
console.log(null + undefined);

/* 1/0
a. Prediction: O
b. type : number
c. because dividing by zero give zero*/
console.log(1/0);

/* 0/0
a. Prediction: 0
b. type : number 
c. anything divided by zero will be zero*/
console.log(0/0);

/* "abc" - 1
a. Prediction : error or not a number
b. type : 
c. abc cant be converted to make this nurmeric conversion possible*/
console.log("abc" - 1);

/* [] + []
a. Prediction : ""
b. type : string
c. empty arrays get to converted into empty strings*/
console.log([] + []);

/* [1] + [2] 
a. Prediction : 12
b. type : strings
c. since arrays get to be converted to strings, then this means 1 and 2 will be strings and whe put together they will form a string of 12*/
console.log([1] + [2]);

//=============================================================================================================
//CHALLENGE 5 :  junior developer's code
console.log("\n==========================================================================================================================")

const UserName = "Sarah"; // var was used instead of const or let

const UserAge = 25; // age is a numeric value and here it was used as a string

const UserScore = 85.5; // This good since score is a number

const ScoredAdjustment = 10; // it was used as string instead of number and would have given problems in future calculations

const NewScore = UserScore + ScoredAdjustment;// again var was used and also + was used with a number and string

console.log("New score:" + NewScore);


const Salary = 50000;// it was store as a string instead of a number
const Tax_Rate = 0.15;// var was used 

const Tax = Salary * Tax_Rate;
console.log("Tax:" + Tax);


const YearsUntilRetirement = 65 - UserAge;

console.log("Years until retirement: " + YearsUntilRetirement);


const TotalAgeAndScore = UserAge + UserScore; // var was used instead of let or const and instead of adding it would have concatenates them.
console.log("Age + score: " + TotalAgeAndScore);


const IsAdmin = false; // false was a string instead of an actual boolean value
console.log("Admin: " + IsAdmin);

/* I changed var to const because these values do not need to be
reassigned. I also changed values such as age, salary and the
score adjustment from strings to numbers so calculations use
the correct data types.*/

//==============================================================================================================
// CHALLENGE 6 : 
console.log("\n=====================================================================================================================")



console.log( 0.1 + 0.2);

console.log( 0.3 - 0.1);

console.log( 0.1 * 3);

console.log( 0.1 + 0.2 === 0.3);


// Calculating the difference and the actual floation-point result
const difference = Math.abs((0.1 + 0.2) - 0.3);
console.log(difference);


console.log("Close enough: ", difference < Number.EPSILON);

/* Some decimal values, such as 0.1 and 0.2, cannot be represented
exactly in binary. Because of this, JavaScript can produce a very
small rounding error when performing calculations.
Number.EPSILON is a very small value that can be used as a tolerance
when comparing floating-point numbers.

Instead of expecting two decimal calculations to be exactly equal,
we can check whether the difference between them is small enough.

To avoid the problems related to floation-point rounding problems*/


// =============================================================================================================
// CHALLENGE 7 : Refactoring
console.log("\n=======================================================================================================================================")

/* ORGINAL CODE
var p = "199.99"
var q = "3"
var t = 0.15
var sub = p * q
var tax = sub * t
var tot = sub + tax
var r = "Total: " + tot */

//Updated code

const price = 199.99;// it was string and changed it to number as it will make sense when making calculation later
const quantity = 3;// even the quantity was a string while it needs to a number

const taxRate =  0.15;//it was poorly labeled so I changed it to taxrate since it also has decimals

const subtotal = price * quantity;// used const and clearly labeled the variables

const tax = subtotal * taxRate;

const total = subtotal + tax;

const receipt = 'Total: R' + total;

console.log(receipt);

/* I basically just changed and used const for the variables and changed the naming such that it is easier to understand */

//============================================================================================================================
// CHALLENGE 8 : RECEIPT 
console.log("\n========================================================================================================================")


// Product info
const productName = "Baby Stroller ";
const unitPrice = 5000.00;
const quantity1 = 2;
const taxRate1 = 0.15;

//Accounting for invalid input
if (quantity1 <=0){
    console.log("Invalid quantity. Quantity must be greater than 0.");
}
// Subtotal calculation
const subtotal1 = unitPrice * quantity1;

const vat = subtotal1 * taxRate1;

const total1 = subtotal1 + vat;

// Rendering the receipt 

console.log("Product:", productName);
console.log("Unit price: R" + unitPrice);
console.log("Quantity:", quantity1);
console.log("Subtotal: R" + subtotal1);
console.log("VAT: R" + vat);
console.log("Total: R" + total1);

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

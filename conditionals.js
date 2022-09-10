//Exercise 1 -  conditionals (if)
const raining = true;

const cold = true;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}



// Exercise 2 -  conditionals (else if)
const temperature = 12;

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves are fine.");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");



//Exercise 3 - Logical Operators (AND)
const isCitizen = true;

const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}


//Exercise 4 - Logical Operators (OR)
if(temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea...");
}


//Exercise 5 - Logical Operators (NOT)
if(!raining) {
  console.log("Leave your umbrella at home!");
}



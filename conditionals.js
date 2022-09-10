//Exercise 1 - Basic conditionals (if)
const raining = true;

const cold = true;

if(raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}



// Exercise 2 - Basic conditionals (else if)
const temperature = 12;

if(temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves are fine.");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");


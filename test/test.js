/**
 * @author Jesse Goerzen <jdgoerzen@gmail.com>
 * @version 1.0.0
 * @file tests if a function generates a random arrangement of the numbers 1 through 10000 as an array.
 * @requires randomTenK.js
 */
// import randomTenK function
const randomTenK = require("../src/randomTenK.js");

// get output of randomTenK function
const input = randomTenK.randomTenK();

// setup
const arr = [];
let valid = true;

// for each item in the input array, check if it has been mentioned before.
let i = 0;
while (valid && i < input.length) {
	if (arr[input[i]]) valid = false;
	else arr[input[i]] = true;
	i++;
}

// check that all values in the input array are between the numbers 1 and 10000.
valid = valid && !arr[0] && arr.length === 10001;

// check that all values between 1 and 10000 are in the input array.
i = 1;
while (valid && i <= 10000) {
	valid = valid && arr[i];
	i++;
}

// output to console whether the randomTenK function is valid or not.
console.log(valid);

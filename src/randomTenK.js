/**
 * @author Jesse Goerzen <jdgoerzen@gmail.com>
 * @version 1.0.0
 * @file a function that generates a random arrangement of the integers 1 through 10000 inclusive as an array.
 */

// Constants
/**
 * @constant {number} LOW the lowest number, inclusive, to be added to the array.
 */
const LOW = 1;
/**
 * @constant {number} HIGH the highest number, inclusive, to be added to the array.
 */
const HIGH = 10000;

/**
 * @function compare Compares two objects with properties named 'value'.
 * @param {Object} a the first object to be compared.
 * @param {number} a.value the property of the first object that is used to compare against another object.
 * @param {Object} b the second object to be compared.
 * @param {number} b.value the property of the second object that is used to compare against another object.
 * @returns {number} A negative value if a's value is less than b's value, a positive value if a's value is greater than b's value, or 0 if a's value equals b's value.
 */
const compare = (a, b) => b.value - a.value;

/**
 * @function randomTenK Generates a random arrangement of the integers 1 through 10000 inclusive as an array.
 * @returns {number[]} A random arrangement of the integers 1 through 10000 as an array.
 */
const randomTenK = () => {
	// setup
	const list = [];

	// create 10000 objects containing a random number and its index.
	for (let i = 0; i <= HIGH - LOW; i++) {
		list[i] = {
			value: Math.random(),
			index: i,
		};
	}

	// I assume that for a list of length 10000, the native sort (which is usually a quicksort of some kind) is good enough, rather than waste time implementing my own sort. I can make a version with my own quicksort if you ask.
	list.sort(compare);

	// set the value of each element in the array to its original index + 1.
	for (let i in list) {
		list[i] = list[i].index + LOW;
	}

	return list;
};

// export to other scripts.
exports.randomTenK = randomTenK;

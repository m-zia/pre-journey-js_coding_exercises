/* 
⚠️
⚠️ See exercise006.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error('arr is required');

	let total = 0;

	arr.forEach(num => {
		if (num % 3 === 0 || num % 5 === 0) {
			total += num;
		}
	})

	return total;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error('str is required');

	let pattern = /^[CGTA]+$/;

	return pattern.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined) throw new Error('str is required');

	//to avoid .replace() undoing the actions of the previous .replace() we create an 'interim' value
	// A -> T
	// C -> Y -> G
	// T -> X -> A
	// G -> C
	return str.replace(/T/g, 'X').replace(/A/g, 'T')
		.replace(/X/g, 'A').replace(/C/g, 'Y')
		.replace(/G/g, 'C').replace(/Y/g, 'G');
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');

	// negative numbers
	if (n <= 1) {
		return false
	};

	// even numbers
	if (n % 2 === 0 && n > 2) {
		return false;
	}

	//if a number is prime, then it has a square root, so we can iterate up to that, instead of the original number
	let squareRoot = Math.sqrt(n);

	//increment in twos, as we already checked even number condition
	for (let i = 3; i <= squareRoot; i += 2) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');

	let matrix = [];

	for (let i = 0; i < n; i++) {
		let row = Array(n).fill(fill);
		matrix.push(row);
	}

	return matrix;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');

	let count = 0;

	for (let i = 0; i < staff.length; i++) {
		if (staff[i].rota.includes(day)) {
			count++;
		}
	}
	
	return count >= 3;
};

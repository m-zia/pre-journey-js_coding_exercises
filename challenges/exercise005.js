export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	// Find the index of the target number in the array
	const index = nums.findIndex(num => num == n);

	// If the target number is not found or is at the last index, return null
	if (index === -1 || index === nums.length - 1) {
		return null;
	}

	// Return the number after the target number
	return nums[index + 1];
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
	let countForZero = 0;
	let countForOne = 0;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === '0') {
			countForZero++;
		}
		else if (str[i] === '1') {
			countForOne++;
		}
	}

	return {
		1: countForOne,
		0: countForZero
	};
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	const reverseString = n.toString().split('').reverse();
	const reversedNumber = parseFloat(reverseString.join(''));
	const finalNumber = reversedNumber * Math.sign(n);

	return finalNumber;
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
	let total = 0;

	arrs.forEach((subArray) => {
		const sum = subArray.reduce((acc, num) => acc + num, 0);
		total += sum;
	});

	return total;
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!'

	[arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

	return arr;
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!

	const values = Object.values(haystack);

	return values.some(value => value.toString().toLowerCase().includes(searchTerm.toLowerCase()));
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!

	const punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

	const cleanString = str.replace(punctuation, '').toLowerCase();

	const words = cleanString.split(' ');

	const wordFrequencies = {};

	for (const word of words) {
		if (wordFrequencies.hasOwnProperty(word)) {
			wordFrequencies[word]++;
		} else {
			wordFrequencies[word] = 1;
		}
	}

	return wordFrequencies;
};

export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!

	// Find the index of the target number in the array
	const index = nums.findIndex(num => num == n);

	// If the target number is not found or is at the last index, return null
	if (index == -1 || index == nums.length - 1) {
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
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!'
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};

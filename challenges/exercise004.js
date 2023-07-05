export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	let ans = [];

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 1) {
			ans.push(nums[i]);
		}
	}

	return ans;
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	const ans = [];

	for (let i = 0; i < names.length; i++) {
		if (names[i][0] === char) {
			ans.push(names[i]);
		}
	}

	return ans;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	const verbs = [];

	for (let i = 0; i < words.length; i++) {
		if (words[i].startsWith("to ")) {
			verbs.push(words[i]);
		}
	}

	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const integerArray = [];

	for (let i = 0; i < nums.length; i++) {
		if (Number.isInteger(nums[i])) {
			integerArray.push(nums[i]);
		}
	}

	return integerArray;
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	const cities = [];

	for (let i = 0; i < users.length; i++) {
		const user = users[i];
		const cityDisplayName = user.data.city.displayName;
		cities.push(cityDisplayName);
	}

	return cities;
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const ans = [];

	for (let i = 0; i < nums.length; i++) {
		const squareRoot = Math.sqrt(nums[i]);
		const roundedSquareRoot = squareRoot.toFixed(2); // round to 2 decimal places
		ans.push(Number(roundedSquareRoot)); // convert back to number
	}

	return ans;
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	const ans = [];

	for (let i = 0; i < sentences.length; i++) {
		const sentence = sentences[i];

		if (sentence.toLowerCase().includes(str.toLowerCase())) {
			ans.push(sentence);
		}
	}

	return ans;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
	const longestSides = [];

	for (let i = 0; i < triangles.length; i++) {
		let longestSide = triangles[i][0];

		for (let j = 1; j < triangles[i].length; j++) {
			if (triangles[i][j] > longestSide) {
				longestSide = triangles[i][j];
			}
		}

		longestSides.push(longestSide);
	}

	return longestSides;
}

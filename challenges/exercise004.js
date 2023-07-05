export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.filter(number => number < 1);
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	// Your code here
	const ans = [];

	names.forEach(name => {
		if (name[0] === char) {
			ans.push(name)
		}
	});

	return ans;
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	// Your code here
	const verbs = [];

	words.forEach(word => {
		if (word.startsWith("to ")) {
			verbs.push(word);
		}
	});

	return verbs;
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	const integerArray = [];

	nums.forEach(number => {
		if (Number.isInteger(number)) {
			integerArray.push(number);
		}
	});

	return integerArray;

}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	// Your code here
	return users.map(user => user.data.city.displayName);
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	// Your code here
	return nums.map(number => Number(Math.sqrt(number).toFixed(2)));
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	// Your code here
	const ans = [];

	sentences.forEach(sentence => {
		if (sentence.toLowerCase().includes(str.toLowerCase())) {
			ans.push(sentence);
		}
	});

	return ans;
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
	const longestSides = [];

	triangles.forEach(array => {
		let longestSide = array[0];

		array.forEach(side => {
			if (side > longestSide) {
				longestSide = side;
			}
		});

		longestSides.push(longestSide);
	});

	return longestSides;
}

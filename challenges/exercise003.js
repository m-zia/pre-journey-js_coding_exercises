export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	// Your code here!
	return nums.map(function (num) {
		return num ** 2;
	});
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Your code here!
	return words.map((word, index) => {
		if (index === 0) {
			return word.toLowerCase();
		} else {
			return word.charAt(0).toUpperCase() + word.slice(1);
		}
	}).join("");
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	const totalSubjects = people.reduce((count, person) => {
		return (count + person.subjects.length);
	}, 0);

	return totalSubjects;
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	// Your code here!
	return menu.some(item => item.ingredients.includes(ingredient));
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	// Your code here!
	let answer = [];

	arr1.forEach((num) => {
		if (arr2.includes(num) && !answer.includes(num)) {
			answer.push(num);
		}
	});

	answer.sort((a, b) => a - b);

	return answer;
}

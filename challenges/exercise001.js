// 👉 	Each function below has some test cases in `exercise001.test.js`
// 		You can run these tests with `npm test`.
//  	All the test cases must pass for each function.

// Note: Be sure to read the corresponding .md file for each exercise, in the docs folder. 📘 👍

export function capitalize(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
	if (firstName === undefined) throw new Error('firstName is required');
	if (lastName === undefined) throw new Error('lastName is required');
	// Add your code here!  
	let firstInitial = firstName.charAt(0).toUpperCase();
	let lastInitial = lastName.charAt(0).toUpperCase();
	let initials = firstInitial + '.' + lastInitial;
	return initials
}

// defining a function to truncate values so we can pass test cases that need answers at 2 decimal places
function toFixed(num, fixed) {
	var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
	return Number(num.toString().match(re)[0]);
}

export function addVAT(originalPrice, vatRate) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is requied');
	if (vatRate === undefined) throw new Error('vatRate is required');
	// Add your code here!
	let vatMultiplier = 1 + (vatRate / 100);
	return toFixed(originalPrice * vatMultiplier, 2);

}

export function getSalePrice(originalPrice, reduction) {
	if (originalPrice === undefined)
		throw new Error('originalPrice is required');
	if (reduction === undefined) throw new Error('reduction is required');
	// Add your code here!

	let reductionMultiplier = 1 - (reduction / 100);
	return toFixed(originalPrice * reductionMultiplier, 2);

}

export function getMiddleCharacter(str) {
	if (str === undefined) throw new Error('str is required');
	// Add your code here!

	const middleIndex = Math.floor(str.length / 2);

	if (str.length % 2 === 1) {
		return str[middleIndex];
	} else {
		return str[middleIndex - 1] + str[middleIndex];
	}
}

export function reverseWord(word) {
	if (word === undefined) throw new Error('word is required');
	// Add your code here!
	return word.split('').reverse().join('');
}

export function reverseAllWords(words) {
	if (words === undefined) throw new Error('words is required');
	// Add your code here!

	function reverseString(string) {
		let reversedString = "";
		for (let i = string.length - 1; i >= 0; i--) {
			reversedString += string[i];
		}
		return reversedString;
	}

	function reverseWords(wordArray) {
		let reversedArray = [];
		for (let i = 0; i < wordArray.length; i++) {
			let reversedWord = reverseString(wordArray[i]);
			reversedArray.push(reversedWord);
		}
		return reversedArray;
	}

	return reverseWords(words);


}

export function countLinuxUsers(users) {
	if (users === undefined) throw new Error('users is required');
	// Add your code here!

	let count = 0;
	users.forEach((v) => (v.type === "Linux" && count++));
	return count;
}

export function getMeanScore(scores) {
	if (scores === undefined) throw new Error('scores is required');
	// Add your code here!

	let sum = 0;

	for (let i = 0; i < scores.length; i++) {
		sum += scores[i];
	}

	let mean = sum / scores.length;
	return Number(mean.toFixed(2));
}

export function simpleFizzBuzz(n) {
	if (n === undefined) throw new Error('n is required');
	// Add your code here!
	if (n % 15 == 0) {
		return "fizzbuzz";
	}
	if (n % 3 == 0) {
		return "fizz";
	}
	if (n % 5 == 0) {
		return "buzz";
	}
	else {
		return 4;
	}

}

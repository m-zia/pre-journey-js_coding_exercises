export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');
	// Your code here!'
	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	return person.city == 'Manchester';
}

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	// Your code here!
	let buses = Number(people / 40);
	return Math.ceil(buses);
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!

	let counter = 0;

	for (const element of arr) {
		if (element === 'sheep') {
			counter++;
		}
	}

  	return counter;
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// Your code here!
	if(person.address.postCode[0] == 'M') {
		return person.address.city == 'Manchester';
	}

	else {
		return false
	}
	
}

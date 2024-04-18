function maxMultiple(divisor, bound) {
	let arrayOfIntegers = [];
	for (let i = 1; i <= bound; i++) {
		if (i % divisor === 0) {
			arrayOfIntegers.push(i);
		}
	}
	return Math.max(...arrayOfIntegers);
}
maxMultiple(3, 10);

// Best practice
function maxMultipleBestPractice(divisor, bound) {
	return bound - (bound % divisor);
}
maxMultipleBestPractice(3, 10);

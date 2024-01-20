function stray(numbers) {
	let sorted = numbers.sort((a, b) => a - b);
	return sorted[0] !== sorted[1] ? sorted[0] : sorted[sorted.length - 1];
}
stray([1, 2, 1]);
stray([17, 17, 3, 17, 17]);

// Best practice
function stray2(numbers) {
	for (let i in numbers) {
		if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
			return numbers[i];
		}
	}
}
stray2([1, 2, 1]);
stray2([17, 17, 3, 17, 17]);

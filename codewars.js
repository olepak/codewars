function oddNumbers(n) {
	let array = [];
	for (let i = 1; i < n * (n + 1); i++)
		if (i % 2 !== 0) {
			array.push(i);
		}
	const triangleArray = [];
	for (let j = 1; j <= n; j++) {
		let newArray = array.splice(0, j);
		triangleArray.push(newArray);
	}
	return triangleArray[n - 1].reduce((total, value) => total + value);
}
oddNumbers(42);

// Best practice https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions/javascript
function oddNumbersBest(n) {
	return Math.pow(n, 3);
}
oddNumbersBest(42);

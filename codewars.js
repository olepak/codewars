function sumOfMinimum(arr) {
	let sum = 0;
	arr.forEach((element) => {
		element.sort((a, b) => a - b);
		sum += element[0];
	});
	return sum;
}
sumOfMinimum([
	[7, 9, 8, 6, 2],
	[6, 3, 5, 4, 3],
	[5, 8, 7, 4, 5],
]); //?
// Best practice
function sumOfMinimum2(arr) {
	return arr.reduce((tot, val) => tot + Math.min(...val), 0);
}
sumOfMinimum2([
	[7, 9, 8, 6, 2],
	[6, 3, 5, 4, 3],
	[5, 8, 7, 4, 5],
]); //?

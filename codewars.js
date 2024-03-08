function oddOrrEven(array) {
	return array.reduce((total, num) => total + num, 0) % 2 ? "odd" : "even";
}
oddOrrEven([]);

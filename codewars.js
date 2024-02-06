function removeSmallest(numbers) {
	let resultArray = numbers.concat();
	let min = Math.min(...numbers);
	resultArray.splice(resultArray.indexOf(min), 1);
	return resultArray;
}
removeSmallest([1, 2, 3, 4, 5]);
removeSmallest([2, 2, 2, 1, 2, 1]);

// Best practice
function removeSmallest2(numbers) {
	let indexOfMin = numbers.indexOf(Math.min(...numbers));
	return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}
removeSmallest2([1, 2, 3, 4, 5]);
removeSmallest2([2, 2, 2, 1, 2, 1]);

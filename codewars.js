function dontGiveMeFive(start, end) {
	let array = [];
	for (let i = start; i <= end; i++) {
		array.push(i);
	}
	return array
		.filter((value) => value % 5 !== 0 || value % 10 === 0)
		.filter((n) => n == RegExp(!/[50-59]/)).length;
}

dontGiveMeFive(4, 17);
dontGiveMeFive(1, 90);

//Best practice

function dontGiveMeFive2(start, end) {
	let count = [];
	for (let i = start; i <= end; i++) {
		if (!/5/.test(i)) {
			count.push(i);
		}
	}
	return count;
}
dontGiveMeFive2(1, 90);

// Another nice solution
//function

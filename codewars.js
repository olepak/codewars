function getSum(a, b) {
	let sum = 0;
	if (a < b) {
		for (let i = a; i <= b; i++) {
			sum += i;
		}
		return sum;
	} else if (a > b) {
		for (let j = b; j <= a; j++) {
			sum += j;
		}
		return sum;
	} else return a;
}
getSum(0, -1);
getSum(0, 1);
getSum(2, 2);
getSum(-321, 123);

// Best practice
function getSum2(a, b) {
	let min = Math.min(a, b);
	let max = Math.max(a, b);
	return ((max - min + 1) * (min + max)) / 2;
}
getSum2(0, -1);
getSum2(0, 1);
getSum2(2, 2);
getSum2(-321, 123);

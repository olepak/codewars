function divisors(integer) {
	let result = [];
	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) {
			result.push(i);
		}
	}
	if (result.length) {
		return result;
	} else return `${integer} is prime`;
}
divisors(12);

// Best practice
function divisors2(integer) {
	let res = [];
	for (let i = 2; i <= Math.floor(integer / 2); ++i)
		if (integer % i === 0) res.push(i);
	return res.length ? res : integer + " is prime";
}
divisors2(12);

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

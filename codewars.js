function years(humanYears) {
	let result = [];
	result[0] = humanYears;
	for (let i = 1; i <= humanYears; i++) {
		if (i == 1) {
			result[1] = result[2] = 15;
		} else if (i === 2) {
			result[1] += 9;
			result[2] += 9;
		} else if (i > 2) {
			result[1] += 4;
			result[2] += 5;
		}
	}
	return result;
}

years(10);
// Best practice
//var humanYearsCatYearsDogYears = function(y) {
// if (y == 1) return [1, 15, 15]
//if (y == 2) return [2, 24, 24]
//return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
//}

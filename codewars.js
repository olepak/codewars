function openSenior(data) {
	let result = [];
	for (value of data) {
		if (value[0] >= 55 && value[1] > 7) {
			result.push("Senior");
		} else result.push("Open");
	}
	return result;
}
openSenior([
	[45, 12],
	[55, 21],
	[19, -2],
	[104, 20],
]); //?

// Best practice
function openSenior2(data) {
	return data.map(([age, handicap]) =>
		age > 54 && handicap > 6 ? "Senior" : "Open"
	);
}
openSenior2([
	[45, 12],
	[55, 21],
	[19, -2],
	[104, 20],
]); //?

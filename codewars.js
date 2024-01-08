function accum(s) {
	let result = "";
	let firstLetter = s.charAt(0).toUpperCase();
	let nextLetters = "";
	for (let i = 1; i < s.length; i++) {
		nextLetters +=
			"-" + s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i);
	}
	return result + firstLetter + nextLetters;
}
accum("zpglnRxqenU");
accum("NyffsGeyylB");

// Best practice solution
function accum1(n) {
	return n
		.split("")
		.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
		.join("-");
}
accum1("zpglnRxqenU");
accum1("NyffsGeyylB");

function xo(str) {
	const letterArray = str.split("");
	const numberOfX = letterArray.reduce((acc, value) => {
		if (value === "x" || value === "X") {
			acc += 1;
		}
		return acc;
	}, 0);
	const numberOfO = letterArray.reduce((acc, value) => {
		if (value === "o" || value === "O") {
			acc += 1;
		}
		return acc;
	}, 0);
	if (numberOfO === numberOfX) {
		return true;
	} else return false;
}
console.log(xo(""));

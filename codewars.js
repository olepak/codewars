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
console.log(xo("xoxoxoxoxo"));

// best practice solution
function xoBestPractice(str) {
	let x = str.match(/x/gi);
	let o = str.match(/o/gi);
	return (x && x.length) === (o && o.length); // when no o and x should be returned true, this is for x and o evaluation before evaluation of length. match method gives null if no matches found
}
console.log(xoBestPractice("fgyfyuifuufuyuufu"));
console.log(xoBestPractice("xoxoxoxoxoxoxoxo"));

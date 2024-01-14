function isIsogram(str) {
	let checkString = str.toLowerCase();
	let unique = "";
	for (char of checkString) {
		if (unique.indexOf(char) === -1) {
			unique += char;
		}
	}
	return checkString.length === unique.length;
}
isIsogram("Dermatoglyphics");
isIsogram("aba");
isIsogram("isIsogram");

// Best practice without usage of Set
function isIsogram2(str) {
	return !/(\w).*\1/g.test(str);
}
isIsogram2("Dermatoglyphics");
isIsogram2("aba");
isIsogram2("isIsogram");

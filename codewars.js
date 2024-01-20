function spinWords(string) {
	let stringSplit = string.split(" ");
	let result = "";
	for (let word of stringSplit) {
		if (word.length >= 5) {
			result += " " + word.split("").reverse().join("");
		} else result += " " + word;
	}
	return result.trim();
}
spinWords("Welcome");
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");

// Best practice
function spinWords2(string) {
	return string
		.split(" ")
		.map((word) => {
			return word.length > 4 ? word.split("").reverse().join("") : word;
		})
		.join(" ");
}
spinWords2("Welcome");
spinWords2("Hey fellow warriors");
spinWords2("This is a test");
spinWords2("This is another test");

function longest(s1, s2) {
	let sorted = (s1 + s2).split("").sort().join("");
	let unique = "";
	for (char of sorted) {
		if (unique.indexOf(char) === -1) {
			unique += char;
		}
	}
	return unique;
}

longest("aretheyhere", "yestheyarehere");
longest("loopingisfunbutdangerous", "lessdangerousthancoding");

// Best practice without usage of Set

function longest2(s1, s2) {
	let sorted = (s1 + s2).split("").sort();
	return sorted
		.filter((value, index, arr) => value !== arr[index - 1])
		.join("");
}
longest2("aretheyhere", "yestheyarehere");
longest2("loopingisfunbutdangerous", "lessdangerousthancoding");

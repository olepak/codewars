String.prototype.toAlternatingCase = function () {
	let toggledString = "";
	for (let i = 0; i < this.length; i++) {
		if (this.charAt(i) === this.charAt(i).toUpperCase()) {
			toggledString += this.charAt(i).toLowerCase();
		} else toggledString += this.charAt(i).toUpperCase();
	}
	return toggledString;
};
let string = "hello world";
let alternatedString = string.toAlternatingCase();
let string2 = "HELLO WORLD";
let alternatedString2 = string2.toAlternatingCase();
let string3 = "HeLLo WoRlD";
let alternatedString3 = string3.toAlternatingCase();
let string4 = "12345";
let alternatedString4 = string4.toAlternatingCase();

// Best practice
String.prototype.toAlternatingCase1 = function () {
	return this.split("")
		.map((a) =>
			a === a.toUpperCase() ? a.toLocaleLowerCase() : a.toUpperCase()
		)
		.join("");
};
let string1 = "hello world";
let alternatedString1 = string.toAlternatingCase1();
let string21 = "HELLO WORLD";
let alternatedString21 = string2.toAlternatingCase1();
let string31 = "HeLLo WoRlD";
let alternatedString31 = string3.toAlternatingCase1();
let string41 = "12345";
let alternatedString41 = string4.toAlternatingCase1();

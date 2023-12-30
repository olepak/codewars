numbers = "8 3 -5 42 -1 0 0 -9 4 7  -4";

const stringNumbersArray = numbers.split(" ");
const numbersArray = stringNumbersArray.map((value) => +value);
let lowest = numbersArray
	.reduce((acc, value) => {
		if (acc < value) {
			return acc;
		} else return value;
	}, Infinity)
	.toString();

let highest = numbersArray.reduce((acc, value) => {
	if (acc > value) {
		return acc;
	} else return value;
}, -Infinity);

// Best practice
numbers = numbers.split(" ");
`${Math.max(...numbers)} ${Math.min(...numbers)}`;

function validatePIN(pin) {
	if (pin.match(/\D/g) !== null || (pin.length !== 4 && pin.length !== 6)) {
		return false;
	} else return true;
}
validatePIN("1234");
validatePIN("12345");
validatePIN("-1.232");
validatePIN(".232");

// Best practice

function validatePIN2(pin) {
	return /^(\d{4}|\d{6})$/.test(pin);
}

validatePIN2("1234");
validatePIN2("12345");
validatePIN2("-1,232");
validatePIN2(".232");

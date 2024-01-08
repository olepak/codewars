function validatePIN(pin) {
	if (pin.match(/[a-z]/g) !== null || pin.length !== 4 || pin.length !== 6) {
		return false;
	} else return true;
}
validatePIN("1234");
validatePIN("12345");

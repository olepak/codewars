function rowWeights(array) {
	const oddArray = [];
	for (let i = 1; i < array.length; i++) {
		if (i % 2 !== 0) {
			oddArray.push(array.slice(i, i + 1));
			array[i] = 0;
		}
	}

	return [
		[array.reduce((tot, val) => tot + val, 0)],
		[oddArray.flat().reduce((tot, val) => tot + val, 0)],
	].flat();
}

rowWeights([13, 27, 49]);

//Best practice
function rowWeights2(array) {
	let t1 = array
		.filter((value, index) => index % 2 === 0)
		.reduce((total, value) => total + value, 0);
	let t2 = array
		.filter((value, index) => index % 2 !== 0)
		.reduce((total, value) => total + value, 0);
	return [t1, t2];
}

rowWeights2([13, 27, 49]);

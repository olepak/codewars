function rowWeights(array) {
	const oddArray = [];
	for (let i = 1; i < array.length; i++) {
		if (i % 2 !== 0) {
			oddArray.push(array.splice(i, 1));
		}
	}
	return oddArray.flat();
}

rowWeights([13, 27, 49, 15]);

function points(games) {
	let sum = 0;
	for (let i = 0; i < 10; i++) {
		let singleScore = games.pop();
		const result = singleScore.split("").map((value) => +value);
		sum += result[0] > result[2] ? 3 : result[0] === result[2] ? 1 : 0; //?
	}
}

points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]);
points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]);
points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]);

// The most concise solution using destructuring method

const points2 = (g) => g.reduce((a, [x, _, y]) => a + (x > y ? 3 : x == y), 0);
const gameScores = [
	"1:0",
	"2:0",
	"3:0",
	"4:0",
	"2:1",
	"3:1",
	"4:1",
	"3:2",
	"4:2",
	"4:3",
];
console.log(points2(["2:1"]));

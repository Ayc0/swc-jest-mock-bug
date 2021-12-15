module.exports = {
	transform: {
		"^.+\\.test\\.js$": "babel-jest",
		"^.+\\.swc\\.test\\.js$": "@swc/jest",
	},
	testRegex: "^.+\\.test\\.js$",
	clearMocks: true,
};

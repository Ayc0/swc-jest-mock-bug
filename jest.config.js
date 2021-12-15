module.exports = {
	transform: {
		"^.+\\.swc\\.test\\.js$": "@swc/jest",
	},
	testRegex: "^.+\\.test\\.js$",
	clearMocks: true,
};

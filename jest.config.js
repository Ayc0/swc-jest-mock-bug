module.exports = {
	transform: {
		"^.+\\.(t|j)sx?$": "@swc/jest",
	},
	testRegex: ".*\\.test\\.(js|tsx?)$",
	clearMocks: true,
};

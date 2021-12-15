module.exports = {
  transform: {
    "^.+\\.js$": "@swc/jest",
  },
  testRegex: "^.+\\.test\\.js$",
  clearMocks: true,
};

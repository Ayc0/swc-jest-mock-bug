const { fnOne, fnTwo } = require("./to-be-mocked");

exports.callFnOne = () => {
  return fnOne();
};

exports.callFnTwo = () => {
  return fnTwo();
};

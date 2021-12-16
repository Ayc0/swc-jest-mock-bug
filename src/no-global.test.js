const { callFnOne, callFnTwo } = require("./index");
const { fnTwo } = require("./to-be-mocked");

jest.mock("./to-be-mocked", () => ({
  fnOne: () => "mocked",
  fnTwo: jest.fn(), // doesn't depend on global var so it works
}));

describe("correct test", () => {
  it("fnOne test", () => {
    expect(callFnOne()).toBe("mocked");
  });

  it("fnTwo test", () => {
    callFnTwo();
    expect(fnTwo).toBeCalledTimes(1); // use fnTwo directly
  });
});

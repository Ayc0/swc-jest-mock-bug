const { callFnOne, callFnTwo } = require("./index");

const notMockedImpl = jest.fn();

jest.mock("./to-be-mocked", () => ({
  fnOne: () => "mocked",
  fnTwo: (...a) => notMockedImpl(...a), // if it works because mock* are allowed in jest.mock
}));

describe("wrong test", () => {
  it("fnOne test", () => {
    expect(callFnOne()).toBe("mocked");
  });

  it("fnTwo test", () => {
    callFnTwo();
    expect(notMockedImpl).toBeCalledTimes(1);
  });
});

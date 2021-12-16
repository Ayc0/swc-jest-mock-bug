const { callFnOne, callFnTwo } = require("./index");

const mockedImpl = jest.fn();

jest.mock("./to-be-mocked", () => ({
  fnOne: () => "mocked",
  fnTwo: mockedImpl, // here it's before `fnTwo` it directly bound to `mockedImpl` that it doesn't work
}));

describe("wrong test", () => {
  it("fnOne test", () => {
    expect(callFnOne()).toBe("mocked");
  });

  it("fnTwo test", () => {
    callFnTwo();
    expect(mockedImpl).toBeCalledTimes(1);
  });
});

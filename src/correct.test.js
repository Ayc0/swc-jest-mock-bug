import { callFnOne, callFnTwo } from "./index";
import { fnTwo } from "./to-be-mocked";

jest.mock("./to-be-mocked", () => ({
  fnOne: () => "mocked",
  fnTwo: jest.fn(), // doesn't depend on global var
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

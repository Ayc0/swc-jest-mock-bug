import { callFnOne, callFnTwo } from "./index";

const mockedImpl = jest.fn();

jest.mock("./to-be-mocked", () => ({
	fnOne: () => "mocked",
	fnTwo: mockedImpl, // cannot reference global variable
}));

describe("wrong test without swc", () => {
	it("fnOne test", () => {
		expect(callFnOne()).toBe("mocked");
	});
	
	it("fnTwo test", () => {
		callFnTwo();
		expect(mockedImpl).toBeCalledTimes(1);
	});
});

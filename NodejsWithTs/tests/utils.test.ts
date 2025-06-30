import {getErrorMessage } from "../src/utils";



describe("getErrorMessage", () => {
  it("should return message from an Error instance", () => {
    const error = new Error("Something went wrong");
    expect(getErrorMessage(error)).toBe("Something went wrong");
  });

  test("should return message from an object with a string message property", () => {
    const error = { message: "Custom error message" };
    expect(getErrorMessage(error)).toBe("Custom error message");
  });

  test("should return string even if message is a number (converted)", () => {
    const error = { message: 404 };
    expect(getErrorMessage(error)).toBe("404");
  });

  test("should return string even if message is a boolean (converted)", () => {
    const error = { message: false };
    expect(getErrorMessage(error)).toBe("false");
  });

  test("should return message from a string input", () => {
    const error = "This is a string error";
    expect(getErrorMessage(error)).toBe("This is a string error");
  });

  test("should return default message for null", () => {
    const error = null;
    expect(getErrorMessage(error)).toBe("An error occured");
  });

  test("should return default message for undefined", () => {
    const error = undefined;
    expect(getErrorMessage(error)).toBe("An error occured");
  });

  test("should return default message for number", () => {
    const error = 404;
    expect(getErrorMessage(error)).toBe("An error occured");
  });

  test("should return default message for boolean", () => {
    const error = false;
    expect(getErrorMessage(error)).toBe("An error occured");
  });

  test("should return default message for empty object", () => {
    const error = {};
    expect(getErrorMessage(error)).toBe("An error occured");
  });

  test("should return default message for array", () => {
    const error = ["some error"];
    expect(getErrorMessage(error)).toBe("An error occured");
  });
});

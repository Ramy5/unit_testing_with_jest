const mocker = require("../mock");

// mock function used to knew Is function called or not
// used to knew how many times the function was called
// used to knew Is the specific argument was called or not means search about it
test("mocker function", () => {
    const mocker = jest.fn((name) => `Hello ${name}`) // default return is undefined
    expect(mocker("ramy")).toBe("Hello ramy")
    expect(mocker("sabry")).toBe("Hello sabry")
    expect(mocker("sayed")).toBe("Hello sayed")
    expect(mocker).toHaveBeenCalled() // Is the function was called?
    expect(mocker).toHaveBeenCalledTimes(3) // How many times the function was called?
    expect(mocker).toHaveBeenCalledWith("sabry") // Is the function has argument called sabry?
    expect(mocker).toHaveBeenLastCalledWith("sayed") // Is the last argument the function was called is sayed?
})
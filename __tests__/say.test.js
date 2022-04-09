let say = require("../say");

test("function to say hello", () => {
    expect(say()).toBe("Hello Jest");
})
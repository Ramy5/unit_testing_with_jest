let theFilter = require("../input");

describe("Validate input field", () => {
    test("If field is empty", () => {
        expect(theFilter()).toBe("Unknowen");
    })

    test("If there are spaces before and after name", () => {
        expect(theFilter(" Ramy ")).toBe("Ramy");
    })

    test("If the user write long name", () => {
        expect(theFilter(" Ramy_Sabry_Sayed")).toBe("Ramy_Sabry");
    })

    test("If name start with underscore", () => {
        expect(theFilter(" _Ramy")).toBe("Ramy");
    })
})
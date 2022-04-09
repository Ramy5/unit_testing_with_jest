let theSum = require("../sum")

// test(name, function, timeout)
// it(name, function, timeout)
// describe(name, function)

describe("sum numbers", () => {
    describe("If there is one number or there is no", () => {
        it("If there is no number", () => {
            expect(theSum()).toBe(0);
        })

        test("Return the number", () => {
            expect(theSum(10)).toBe(10);
        });
    })

    describe("All rest of numbers", () => {
        test.only("Return number one + number two", () => {
            expect(theSum(10, 20)).toBe(30);
        })

        test.only("Return number one + number two + number three", () => {
            expect(theSum(10, 20, 30)).toBe(60);
        });

        test("Return the sum", () => {
            expect(theSum(10, 20, 30, 40, 50, 10, 1, 9, 30)).toBe(200);
        })
    })
})
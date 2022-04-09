const allData = require("../all");

describe("this test for toHaveLength and toContain and loop js", () => {
    describe("toHaveLength", () => {
        test("return the length of array 1st", () => {
            expect(allData.length).toBe(5);
        })

        test("return the length of array 2nd", () => {
            expect(allData).toHaveLength(5)
        })
    })

    describe("toContain and loop", () => {
        test("loop", () => {
            for (let i = 0; i < allData.length; i++) {
                expect(allData[i]).not.toBe(0)
            }
        })

        test("Is array contain 1 1st", () => {
            expect(allData).toContain(1);
        })
        test("Is array not contain 6", () => {
            expect(allData).not.toContain(6);
        })
    })
})

describe("for truthy falsy greater and less", () => {
    describe("truthy and falsy", () => {
        test("is all element is number 1st", () => {
            for (let i = 0; i < allData.length; i++) {
                expect(isNaN(allData[i])).toBe(false)
            }
        })

        test("is all element is number 2nd", () => {
            for (let i = 0; i < allData.length; i++) {
                expect(isNaN(allData[i])).toBeFalsy()
            }
        })

        test("is all element is number 3rd", () => {
            for (let i = 0; i < allData.length; i++) {
                expect(isNaN(allData[i])).not.toBeTruthy()
            }
        })
    })

    describe("greater and less", () => {
        test("is first element greater than 5", () => {
            expect(allData[0]).not.toBeGreaterThan(5)
        })

        test("is first element greater than or equal 5", () => {
            expect(allData[0]).toBeGreaterThanOrEqual(5)
        })

        test("is last element less than 5", () => {
            expect(allData[4]).not.toBeLessThan(5)
        })

        test("is last element greater than or equal 5", () => {
            expect(allData[4]).toBeLessThanOrEqual(5)
        })
    })
})

describe("this is for toBeUndefined and toMatch and toHaveProperty", () => {
    test("toUndefined test", () => {
        let a;
        expect(a).toBeUndefined();
    })

    test("toMatch test", () => {
        let myString = "my name is ramy";
        expect(myString).toMatch(/ramy/)
    })

    test("toHaveProperty", () => {
        let myObject = {
            name: "ramy",
            age: 22,
        }
        expect(myObject).toHaveProperty("name")
    })

    test("toHaveProperty", () => {
        let myObject = {
            name: "ramy",
            age: 22,
        }
        expect(myObject).toHaveProperty("name", "ramy")
    })
})

// create your own matcher 1st
expect.extend({
    toBeLargerThan(recieve, given) { // name of your matcher, deal with it like ordinary function
        const pass = recieve > given; // what the function do
        if (pass) {
            return {
                message: () => `Expected ${recieve} larger than ${given}`, // message will you to user
                pass: true,
            }
        } else {
            return {
                message: () => `Error: Expected ${recieve} larger than ${given}`, //message will show to you if false
                pass: false,
            }
        }
    }
})

// now it is time to use your 1st matcher
test("is recieve larger than give", () => {
    expect(10).toBeLargerThan(8); // ok your 1st matcher is work very well
})

// create your own matcher 2nd
expect.extend({
    toBeBetween(value, start, end) { // like the last one
        let pass = value > start && value < end;
        if (pass) {
            return {
                message: () => `Expected ${value} larger than ${start} and less than ${end}`,
                pass: true,
            }
        } else {
            return {
                message: () => `Error: Expected ${value} larger than ${start} and less than ${end}`,
                pass: false,
            }
        }
    }
})

// it is time to use your 2nd matcher
test("is value between range", () => {
    expect(2000).toBeBetween(1999, 2022) // your 2nd matcher is work very well
})

// =====================================
// expect anything and any and arrayContaining
// all the following used with toEqual match
describe("expect anything and any and arrayContaining", () => {
    test("return anything except undefined and null", () => {
        let a = 1;
        expect(10).toEqual(expect.anything())
        expect("ramy").toEqual(expect.anything())
        expect([1, 2, 3, 4]).toEqual(expect.anything())
        expect(a).toEqual(expect.anything())
    })

    test("match constructor", () => { // number and string and object are constructor in js
        expect(10).toEqual(expect.any(Number))
        expect("ramy").toEqual(expect.any(String))
    })

    test("array containing", () => {
        let myArray = [1, 2, 3, 4, 5, 6];
        expect(myArray).toEqual(expect.arrayContaining([1, 2] /* Accept array here to match it with the main array in variable */ ))
        expect(myArray).toEqual(expect.arrayContaining([1, 5]))
        expect(myArray).toEqual(expect.arrayContaining([1, 2, 6]))
    })
})
/*
    beforeAll(function, timeout)
    beforeEach(function, timeout)
    afterAll(function, timeout)
*/

beforeAll(() => {
    // this method is used before all other tests you created
    // you can use it to check data before the tests starting for example
    // you can use it to make sure there is data
    // or anything you want to check it before all tests start, then all tests will start
})

beforeEach(() => {
    // this method such beforeAll method
    // the only different is [this method starts before each tests you created]
    // it means every time you create new test this method will be start before it
})

afterAll(() => {
    // this method starts after all tests you created finished
    // you can use it to check if cache created after tests and clean it
    // or to check anything you want after tests is finished
})
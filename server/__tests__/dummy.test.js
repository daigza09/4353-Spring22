const { sumFunction } = require("../utils/test_helper")
//tests take a description and a function
describe('test sumFunction, expected to pass', () => {
    const a = 5
    const b = 6
    const result = sumFunction(a, b)
    //through expect we indicate the expected result of the test
    //the .toBe method expects a specific value you pass
    //https://jestjs.io/docs/expect#tobevalue

    it('my test', () => {
        expect(result).toBe(11);
    })
})
describe('test sumFunction, expected to fail', () => {
    const a = 5
    const b = 6
    const result = sumFunction(a, b)

    it('my test', () => {
        expect(result).toBe(12);
    })
})

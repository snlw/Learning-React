const { beforeAll, afterAll, beforeEach, afterEach, describe, test, expect } = require("@jest/globals");

beforeAll(() => console.log("Starting testing for the top layer"));
afterAll(() => console.log("Ending testing for the top layer"));
beforeEach(() => console.log('Before the 1 test'));
afterEach(() => console.log('After the 1 test'));
test('I AM TEST', () => expect('I AM TEST').toMatch(/TEST/))

describe('New block', () => {
    beforeAll(() => console.log("Starting testing for the new block"));
    afterAll(() => console.log("Ending testing for the new block"));
    beforeEach(() => console.log('Before the 1 test for the new block'));
    afterEach(() => console.log('After the 1 test for the new block'));
    test('I AM NESTED TEST', () => expect('I AM NESTED TEST').toMatch(/NESTED/))
})
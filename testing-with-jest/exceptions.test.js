const { test, expect } = require("@jest/globals");

const dummyErrorMessage = () => {throw new Error('haha noob')};

test('check if function throws out error', () => {
    expect(() => dummyErrorMessage()).toThrow(/noob/);
    expect(() => dummyErrorMessage()).toThrow(Error);
})
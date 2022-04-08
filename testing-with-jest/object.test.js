const { expect } = require("@jest/globals");

const data = {
    'one' : 1,
    'two' : 2
};

// If you want to check the value of an object, use toEqual instead
test('object assignment', () => {
    expect(data).toEqual({
        one : 1,
        two : 2
    })
});

// test for the opposite of a matcher using not.toBe
test('object keys are not zero', () => {
    for (const key in Object.keys(data)){
        expect(data[key]).not.toBe(0);
    };
});
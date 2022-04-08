const { expect } = require("@jest/globals");

test('null', () => {
    const testSubject = null;
    expect(testSubject).toBeNull();
    expect(testSubject).toBeDefined();
    expect(testSubject).not.toBeUndefined();
    expect(testSubject).not.toBeTruthy();
    expect(testSubject).toBeFalsy();
});
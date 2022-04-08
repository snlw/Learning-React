const { test, expect } = require("@jest/globals");


test('check if array contains xxx', () => {
    const dummy = ['a', 'b', 'c'];

    expect(dummy).toContain('a');
    expect(dummy).not.toContain('z')
})
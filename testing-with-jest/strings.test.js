const { test } = require("@jest/globals");

test('there is no sean in team', () => {
    expect('team').not.toMatch(/sean/);
});

test('there is "ea" in team', () => {
    expect('team').toMatch(/ea/);
});

test('password meets the requirements', () => {
    const password = 'SEAN1!';
    
    expect(password).toMatch(/!/);
    expect(password).toMatch(/[A-Z]/);
    expect(password).toMatch(/[0-9]/);
});
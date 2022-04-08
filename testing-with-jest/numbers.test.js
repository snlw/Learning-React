const { test } = require("@jest/globals");


test('2 + 2 should be 4', ()=>{
    const value = 2 + 2;
    expect(value).toBeGreaterThan(0);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
});

test('adding floating point numbers', ()=>{
    const value = 0.1 + 0.1999;
    expect(value).toBeCloseTo(0.3);

    // Will not work due to rounding errors
    expect(value).toBe(0.3); 
});
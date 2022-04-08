const { test } = require("@jest/globals");

// If fetchData() returns a Promise, 
// If the promise is rejected, the test will automatically fail.
test('the data is peanut butter', () => {
    return expect(fetchData()).resolves.toBe('peanut butter');
  });

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
});

test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
});
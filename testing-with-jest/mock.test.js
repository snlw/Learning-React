const { test, expect } = require("@jest/globals");

function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
};

const mockCallback = jest.fn(x => 42 + x);
forEach([0,1], mockCallback);

test('Callback function is called twice', () => {
    expect(mockCallback.mock.calls.length).toBe(2);
});

test('First argument is 0', () => {
    expect(mockCallback.mock.calls[0][0]).toBe(0);
}); 

test('First argument is 1', () => {
    expect(mockCallback.mock.calls[1][0]).toBe(1);
}); 

test('First value is 42', () => {
    expect(mockCallback.mock.results[0].value).toBe(42);
})


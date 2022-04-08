const { test, expect } = require("@jest/globals");  

// If done() is never called, the test will fail (with timeout error), which is what you want to happen.
// If the expect statement fails, it throws an error and done() is not called. 
// If we want to see in the test log why it failed, we have to wrap expect in a try block and pass the error in the catch block to done. 
// Otherwise, we end up with an opaque timeout error that doesn't show what value was received by expect(data).
test('check if data returned contains "peanut butter"', () => {
    const callback = (data) => {
        try {
            expect(data).toMatch(/peanut butter/);
            done();
        }
        catch (e) {
            done(e);
        };
    };

    fetchData(callback);
})
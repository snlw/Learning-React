const sum = (a, b) => {
    return a + b
};

/*
Example of Successful Output :  
    PASS  ./sum.test.js
    ✓ adds 1 + 2 to equal 3 (1 ms)
    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        0.17 s
    Ran all test suites.

Example of Fail Output : 
 FAIL  ./sum.test.js
 ✕ adds 1 + 2 to equal 3 (3 ms)
 ● adds 1 + 2 to equal 3
    expect(received).toBe(expected) // Object.is equality
    Expected: 4
    Received: 3
*/

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

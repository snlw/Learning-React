import {diff} from 'jest-diff';

/*
Tool for visualizing changes in data. 
Exports a function that compares two values of any type and returns a "pretty-printed" string illustrating the difference between the two arguments.
*/
const a = {a: {b: {c: 5}}};
const b = {a: {b: {c: 6}}};

const result = diff(a, b);

// print diff
console.log(result);
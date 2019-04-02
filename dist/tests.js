"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Test 1: it can spot array duplicates:
var arr = [1, [2, 3], 10, '', 4, 5, 6, 7, 8, 9, 13, [2, 3]];
var result = index_1.getDuplicates(arr);
if (result.length === 1 && Array.isArray(result[0]) &&
    result[0][0] === 2 && result[0][1] === 3)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: it can spot boolean duplicates:
arr = [1, false, 10, '', 4, 5, 6, 7, 8, 9, 13, false, 80, 90, 100, 104, 102, false];
result = index_1.getDuplicates(arr);
if (result.length === 2 && result[0] === false && result[1] === false)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3: it can spot number duplicates:
arr = [1, 2, '', [], false, 1, 6, 7, true, 1];
result = index_1.getDuplicates(arr);
if (result.length === 2 && result[0] === 1 && result[1] === 1)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: it can spot string duplicates:
arr = [1, 2, 'abc', [], false, 'abc', 6, 7, true, 'abc'];
result = index_1.getDuplicates(arr);
if (result.length === 2 && result[0] === 'abc' && result[1] === 'abc')
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5: string matching is case-sensitive:
arr = [1, 2, 'Abc', [], false, 'abc', 6, 7, true, 'abC'];
result = index_1.getDuplicates(arr);
if (result.length === 0)
    console.log('test 5 passed');
else
    console.log('test 5 failed');
// Test 6: long float duplicates can be spotted:
arr = [1, 2, 22.00356789991112, 4, 5, 6, 7, 8, 9, 22.00356789991112, 10];
result = index_1.getDuplicates(arr);
if (result.length === 1 && result[0] === 22.00356789991112)
    console.log('test 6 passed');
else
    console.log('test 6 failed');
// Test 7: long float differences can be spotted:
arr = [1, 2, 22.00356789991112, 4, 5, 6, 7, 8, 9, 22.00356789991114, 10];
result = index_1.getDuplicates(arr);
if (result.length === 0)
    console.log('test 7 passed');
else
    console.log('test 7 failed');
// Test 8: long string duplicates can be spotted:
arr = [1, 2,
    'asdfdsfdse45%^&*lop;iuythgbnmxcvfgtyujhnbasdfdsfdse45%^&*lop;iuy',
    3, 4, 5, 6, 7, 8, 9, 'asdfdsfdse45%^&*lop;iuythgbnmxcvfgtyujhnbasdfdsfdse45%^&*lop;iuy'];
result = index_1.getDuplicates(arr);
if (result.length === 1 && result[0] === 'asdfdsfdse45%^&*lop;iuythgbnmxcvfgtyujhnbasdfdsfdse45%^&*lop;iuy')
    console.log('test 8 passed');
else
    console.log('test 8 failed');

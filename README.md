# getDuplicates(array): any[]

Returns every extra instance of unique items in `array`.  
(Won't work for array containing objects.  Objects will be ignored.)  
Does not modify `array`.  

## Examples
```
let arr = [1, 2, '', [], false, 1, 6, 7, true, 1];  
result = getDuplicates(arr);  
// result is now [1, 1]  

arr = [1, 2, 'abc', [], false, 'abc', 6, 7, true, 'abc'];  
result = getDuplicates(arr);  
// result is now ['abc', 'abc']  

arr = [1, [2, 3], 6, 7, 8, 9, [2, 3]];  
result = getDuplicates(arr);  
// result is now [ [2,3] ]  
```

## Installation
`npm i  @writetome51/array-get-duplicates`

## Loading
```
// if using TypeScript:
import {getDuplicates} from '@writetome51/array-get-duplicates';
// if using ES5 JavaScript:
var getDuplicates = require('@writetome51/array-get-duplicates').getDuplicates;
```
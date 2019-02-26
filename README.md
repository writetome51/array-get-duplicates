# getDuplicates(array): any[]

Returns every extra instance of each `array` item.  
(Won't work for array containing objects.  Objects will be ignored.)
It doesn't modify the array passed into it.  

Examples:

let arr = [1, 2, '', [], false, 1, 6, 7, true, 1];  
result = getDuplicates(arr);  
// result is now [1, 1]  

arr = [1, 2, 'abc', [], false, 'abc', 6, 7, true, 'abc'];  
result = getDuplicates(arr);  
// result is now ['abc', 'abc']  

arr = [1, [2, 3], 6, 7, 8, 9, [2, 3]];  
result = getDuplicates(arr);  
// result is now [ [2,3] ]  

## Loading
```
import {getDuplicates} from '@writetome51/array-get-duplicates';

```
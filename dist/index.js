import { arrayHas } from '@writetome51/array-has';
import { not } from '@writetome51/not';
// Returns every extra instance of each array item.
export function getDuplicates(array) {
    let uniqueItems = [], duplicates = [];
    array.forEach((item) => {
        if (not(arrayHas(item, uniqueItems)))
            uniqueItems.push(item);
        else
            duplicates.push(item);
    });
    return duplicates;
}

import { getIndexesOf } from '@writetome51/array-get-indexes-intermediate/getIndexesOf';
import { getUniqueItems } from '@writetome51/array-get-unique-items/getUniqueItems';


// Returns every extra instance of each array item.
// Won't work for array containing objects.  Objects will be ignored.

export function getDuplicates(array): any[] {
	let uniqueItems = getUniqueItems(array);
	let duplicatedItems = [], i = -1;
	while (++i < uniqueItems.length) {
		let indexes = getIndexesOf(uniqueItems[i], array);
		if (indexes.length > 1) {
			let d = -1;
			// while there's still an extra instance of the item...
			while (++d < (indexes.length - 1)) {
				duplicatedItems.push(uniqueItems[i]);
			}
		}
	}
	return duplicatedItems;
}

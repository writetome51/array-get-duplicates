"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_indexes_1 = require("@writetome51/array-get-indexes");
var array_get_unique_items_1 = require("@writetome51/array-get-unique-items");
// Returns every extra instance of each array item.
// Won't work for array containing objects.  Objects will be ignored.
function getDuplicates(array) {
    var uniqueItems = array_get_unique_items_1.getUniqueItems(array);
    if (uniqueItems.length === array.length)
        return [];
    var duplicatedItems = [], i = -1;
    while (++i < uniqueItems.length) {
        var indexes = array_get_indexes_1.getIndexesOf(uniqueItems[i], array);
        // while there's still an extra instance of the item...
        while ((--indexes.length) > 0)
            duplicatedItems.push(uniqueItems[i]);
    }
    return duplicatedItems;
}
exports.getDuplicates = getDuplicates;

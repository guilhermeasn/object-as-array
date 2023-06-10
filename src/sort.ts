import type { ObjectInfo } from "./index";
import toArray from "./toArray";

/**
 * Sort Handler Function Type
 */
export type SortHandler<O extends object, T extends keyof ObjectInfo<O>> = (a : ObjectInfo<O>[T], b : ObjectInfo<O>[T]) => number;

/**
 * Sorts the position of the object's elements
 * @param object Object to be organized
 * @param dataType Data type to be sent to the callback function: key, value or entrie
 * @param handler Callback function
 * @returns Object reorganized
 */
export function sort<O extends object, T extends keyof ObjectInfo<O>>(object : O, dataType : T, handler : SortHandler<O, T>) : O {
    
    const r : any = {};
    const entries = toArray(object, 'entrie');

    for(let a = 0; a < entries.length; a++) {
        for(let b = a + 1; b < entries.length; b++) {

            if(handler(
                (dataType === 'key' ? entries[a][0] : dataType === 'value' ? entries[a][1] : entries[a]) as ObjectInfo<O>[T],
                (dataType === 'key' ? entries[b][0] : dataType === 'value' ? entries[b][1] : entries[b]) as ObjectInfo<O>[T]
            ) > 0) {
                const temp = entries[b];
                entries[b] = entries[a];
                entries[a] = temp;
            }

        }
    }

    for(let [key, value] of entries) {
        r[key] = value;
    }

    return r;

}

export default sort;
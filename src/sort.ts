import type { ObjectInfo } from "./index";

/**
 * Sort Handler Function Type
 */
export type SortHandler<O extends object, T extends keyof ObjectInfo<O>> = (a : ObjectInfo<O>[T], b : ObjectInfo<O>[T]) => number | boolean;

/**
 * Sorts the position of the object's elements
 * @param object Object to be organized
 * @param dataType Data type to be sent to the callback function: key, value or entrie
 * @param handler Callback function
 * @returns Object reorganized
 */
export function sort<O extends object, T extends keyof ObjectInfo<O>>(object : O, dataType : T, handler ?: SortHandler<O, T>) : O {

    return <O>Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => {

        const test = (typeof handler === 'function') ? handler(
            dataType === 'key' ? ka : dataType === 'value' ? va : [ka, va],
            dataType === 'key' ? kb : dataType === 'value' ? vb : [kb, vb]
        ) : dataType === 'key' ? ka > kb : dataType === 'value' ? va > vb : ka > kb && va > vb;

        return (typeof test === 'number') ? test : test ? 1 : -1;

    }));
    
}

export default sort;
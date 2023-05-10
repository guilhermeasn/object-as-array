import type { ObjectInfo } from "./types";

/**
 * Find Handler Function Type
 */
export type FindHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

/**
 * Returns the first element that satisfies the test function or returns null
 * @param object Object to be evaluated
 * @param dataType Returned data type: key, value or entrie
 * @param handler Test function
 * @returns First element that passed the test or null
 */
export default function find<O extends object, T extends keyof ObjectInfo<O>>(object : O, dataType : T, handler : FindHandler<O>) : ObjectInfo<O>[T] | null {
    for(let key in object) {
        if(handler(object[key], key)) {
            return (
                dataType === 'key' ? key :
                dataType === 'value' ? object[key] :
                [key, object[key]]
            ) as ObjectInfo<O>[T]
        }
    }
    return null;
}
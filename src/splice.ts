import type { ArrayValuesType } from "./types";

/**
 * Returns the elements that did not have their keys specified,
 * being able to delete these elements from the original object or not
 * @param object Target object
 * @param changeOriginalObject Decides whether or not to modify the original object
 * @returns Returns missing or deleted keys
 */
export default function splice<O extends object, K extends Array<keyof O>>(object : O, changeOriginalObject : boolean, ...keys : K) : Omit<O, ArrayValuesType<K>> {
    let r = changeOriginalObject ? object : { ...object };
    keys.forEach(key => delete r[key]);
    return r as Omit<O, ArrayValuesType<K>>;
}
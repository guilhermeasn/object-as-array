import type { ArrayValuesType } from "./types";

/**
 * Returns a section of an object
 * @param object Target object
 * @param keys Selects object elements by keys
 * @returns Portion of the object
 */
export default function slice<O extends object, K extends Array<keyof O>>(object : O, ...keys : K) : Pick<O, ArrayValuesType<K>> {
    let r = {} as O;
    keys.forEach(key => r[key] = object[key]);
    return r as Pick<O, ArrayValuesType<K>>;
}
import concat from "./concat";
import type { ArrayValuesType } from "./index";

/**
 * Returns the elements that did not have their keys specified
 * @param object Target object
 * @param changeOriginalObject Decides whether or not to modify the original object
 * @returns Returns missing or deleted keys
 */
export function omit<O extends object, K extends Array<keyof O>>(object : O, ...keys : K) : Omit<O, ArrayValuesType<K>> {
    let r = concat({}, object);
    keys.forEach(key => delete r[key]);
    return r as Omit<O, ArrayValuesType<K>>;
}

export default omit;
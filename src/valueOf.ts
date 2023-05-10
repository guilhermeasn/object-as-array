/**
 * Returns the value of an element of an object
 * @param object Target object
 * @param key Element key
 * @returns Element value
 */
export default function valueOf<O extends object, K extends keyof O>(object : O, key : K) : O[K] {
    return object?.[key];
}
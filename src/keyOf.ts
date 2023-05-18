/**
 * Returns the key of the first occurrence of a value in an object or null
 * @param object Target object
 * @param value Value to be sought
 * @returns Key of element found or null
 */
export function keyOf<O extends object>(object : O, value : O[keyof O]) : keyof O | null {
    for(let key in object) {
        if(object[key] === value) {
            return key;
        }
    }
    return null;
}

export default keyOf;
import keyOf from "./keyOf";
import reverse from "./reverse";

/**
 * Returns the key of the last occurrence of a value in an object or null
 * @param object Target object
 * @param value Value to be sought
 * @returns Key of element found or null
 */
export function lastKeyOf<O extends object>(object : O, value : O[keyof O]) : keyof O | null {
    object = reverse(object);
    return keyOf(object, value);
}

export default lastKeyOf;
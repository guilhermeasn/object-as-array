import toArray from "./toArray";

/**
 * Reverses the position of object elements
 * @param object Target object
 * @returns Object reversed
 */
export function reverse<O extends object>(object : O) : O {

    const r : any = {};
    const keys = toArray(object, 'key').reverse();

    for(let key of keys) {
        r[key] = object[key];
    }

    return r;

}

export default reverse;
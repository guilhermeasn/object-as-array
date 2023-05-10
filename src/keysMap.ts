import { MapHandler } from "./map";

/**
 * Calls a defined callback function on each element of an object,
 * and returns an object with the same keys that contains the results.
 * @param object Object to be mapped
 * @param handler Callback function
 * @returns Resulting object
 */
export default function keysMap<O extends object, R>(object : O, handler : MapHandler<O, R>) : Record<keyof O, R> {

    const r = {} as Record<keyof O, R>;

    for(let key in object) {
        r[key] = handler(object[key], key);
    }

    return r;

}

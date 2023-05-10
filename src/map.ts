export type MapHandler<O extends object, R> = (value : O[keyof O], key : keyof O) => R

/**
 * Calls a defined callback function on each element of an object,
 * and returns an array that contains the results.
 * @param object Object to be mapped
 * @param handler Callback function
 * @returns Resulting array
 */
export default function map<O extends object, R>(object : O, handler : MapHandler<O, R>) : R[] {

    const r : R[] = [];

    for(let key in object) {
        r.push(handler(object[key], key));
    }

    return r;

}

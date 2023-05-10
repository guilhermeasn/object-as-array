/**
 * Reduce Handler Function Type
 */
export type ReduceHandler<O extends object, R> = (previousValue: R, currentValue: O[keyof O], currentKey : keyof O) => R

/**
 * Calls the specified callback function for all the elements in an object. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next
 * call to the callback function
 * @param object Target object
 * @param handler Callback function
 * @param initial Initial value to be a joined (optional)
 * @returns Result of the reduction
 */
export default function reduce<O extends object, R = O[keyof O]>(object : O, handler : ReduceHandler<O, R>, initial ?: R) : R {

    let r : R | undefined = initial;

    for(let key in object) {
        if(typeof r === 'undefined') r = object[key] as R;
        else r = handler(r as R, object[key], key);
    }

    return <R>r;

}

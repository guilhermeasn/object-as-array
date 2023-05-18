/**
 * Filter Handler Function Type
 */
export type FilterHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

/**
 * Returns only the elements of the object that satisfy the test function
 * @param object Object to be evaluated
 * @param handler Test function
 * @returns Elements that will pass the test
 */
export function filter<O extends object>(object : O, handler : FilterHandler<O>) : Partial<O> {
    
    const r : Partial<O> = {};

    for(let key in object) {
        if(handler(object[key], key)) {
            r[key] = object[key];
        }
    }

    return r;

}

export default filter;
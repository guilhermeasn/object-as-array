/**
 * Some Handler Function Type
 */
export type SomeHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

/**
 * Determines whether one of an object's members satisfies the specified test
 * @param object Object to be tested
 * @param handler Test function
 * @returns Boolean result
 */
export function some<O extends object>(object : O, handler : SomeHandler<O>) : boolean {
    for(let key in object) {
        if(handler(object[key], key)) {
            return true;
        }
    }
    return false;
}

export default some;
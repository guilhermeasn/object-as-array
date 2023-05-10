/**
 * Every Handler Function Type
 */
export type EveryHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

/**
 * Determines whether all the members of an object satisfy the specified test
 * @param object Object to be tested
 * @param handler Test function
 * @returns Boolean result
 */
export default function every<O extends object>(object : O, handler : EveryHandler<O>) : boolean {
    for(let key in object) {
        if(!handler(object[key], key)) {
            return false;
        }
    }
    return true;
}

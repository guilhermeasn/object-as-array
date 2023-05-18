/**
 * For Each Handler Function Type
 */
export type ForEachHandler<O extends object> = (value : O[keyof O], key : keyof O) => void;

/**
 * Performs the specified action for each element in an object
 * @param object Object to be traversed
 * @param handler Function to be performed on each element
 */
export function forEach<O extends object>(object : O, handler : ForEachHandler<O>) : void {
    for(let key in object) {
        handler(object[key], key);
    }
}

export default forEach;
/**
 * For Each Async Handler Function Type
 */
export type ForEachAsyncHandler<O extends object> = (value : O[keyof O], key : keyof O) => Promise<void>;

/**
 * Performs the specified async action for each element in an object
 * @param object Object to be traversed
 * @param handler Async function to be performed on each element
 */
export async function forEachAsync<O extends object>(object : O, handler : ForEachAsyncHandler<O>) : Promise<void> {
    for(let key in object) {
        await handler(object[key], key);
    }
}

export default forEachAsync;
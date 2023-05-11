import type { EveryHandler } from "./every"
import type { FilterHandler } from "./filter"
import type { FindHandler } from "./find"
import type { ForEachHandler } from "./forEach"
import type { MapHandler } from "./map"
import type { ReduceHandler } from "./reduce"
import type { SomeHandler } from "./some"
import type { SortHandler } from "./sort"

export type {
    EveryHandler,
    FilterHandler,
    FindHandler,
    ForEachHandler,
    MapHandler,
    ReduceHandler,
    SomeHandler,
    SortHandler
}

/**
 * Types of information for an object
 */
export type ObjectInfo<O extends object> = {
    key    : keyof O,
    value  : O[keyof O],
    entrie : [keyof O, O[keyof O]]
}

/**
 * Dataset of an object
 */
export type ObjectData<O extends object> = {
    key    : Array<keyof O>,
    value  : Array<O[keyof O]>,
    entrie : Array<[keyof O, O[keyof O]]>
}

/**
 * Functional object methods
 */
export type ObjectAsArray<O extends object> = {

    /**
     * Returns only the elements of the object that satisfy the test function
     * @param handler Test function
     * @returns Elements that will pass the test
     */
    filter : (handler : Expose<FilterHandler<O>>) => Partial<O>

    /**
     * Determines whether one of an object's members satisfies the specified test
     * @param handler Test function
     * @returns Boolean result
     */
    some : (handler : Expose<SomeHandler<O>>) => boolean

    /**
     * Determines whether all the members of an object satisfy the specified test
     * @param handler Test function
     * @returns Boolean result
     */
    every : (handler : Expose<EveryHandler<O>>) => boolean

    /**
     * Performs the specified action for each element in an object
     * @param handler Function to be performed on each element
     */
    forEach : (handler : Expose<ForEachHandler<O>>) => void

    /**
     * Calls a defined callback function on each element of an object,
     * and returns an array that contains the results.
     * @param handler Callback function
     * @returns Resulting array
     */
    map : <R>(handler : Expose<MapHandler<O, R>>) => R[]

    /**
     * Calls a defined callback function on each element of an object,
     * and returns an object with the same keys that contains the results.
     * @param handler Callback function
     * @returns Resulting object
     */
    keysMap : <R>(handler : Expose<MapHandler<O, R>>) => Record<keyof O, R>

    /**
     * Sorts the position of the object's elements
     * @param dataType Data type to be sent to the callback function: key, value or entrie
     * @param handler Callback function
     * @returns Object reorganized
     */
    sort : <T extends keyof ObjectInfo<O>>(dataType : T, handler : Expose<SortHandler<O, T>>) => O

    /**
     * Calls the specified callback function for all the elements in an object. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next
     * call to the callback function
     * @param handler Callback function
     * @param initial Initial value to be a joined (optional)
     * @returns Result of the reduction
     */
    reduce : <R = O[keyof O]>(handler : Expose<ReduceHandler<O, R>>, initial ?: R) => R | undefined

    /**
     * Calls the specified callback function for all the elements in an object reversed. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next
     * call to the callback function
     * @param handler 
     * @param initial 
     * @returns 
     */
    reduceRight : <R = O[keyof O]>(handler : Expose<ReduceHandler<O, R>>, initial ?: R) => R | undefined

    /**
     * Returns a section of an object
     * @param keys Selects object elements by keys
     * @returns Portion of the object
     */
    slice : <K extends Array<keyof O>>(...keys : K) => Pick<O, ArrayValuesType<K>>

    /**
     * Returns the elements that did not have their keys specified
     * @param changeOriginalObject Decides whether or not to modify the original object
     * @returns Returns missing or deleted keys
     */
    omit : <K extends Array<keyof O>>(...keys : K) => Omit<O, ArrayValuesType<K>>

    /**
     * Combines two objects
     * This method returns a new object without modifying any existing object
     * @param assign Object to be combined
     * @returns Composed object
     */
    concat : <A extends object>(assign : A) => O & A

    /**
     * Reverses the position of object elements
     * @param object Target object
     * @returns Object reversed
     */
    reverse : () => O

    /**
     * Turn object into a string
     * @param expand Add line breaks and indentation
     * @returns Resulting string
     */
    toString : (expand ?: boolean | number) => string

    /**
     * Turn object into an array
     * @param dataType Data of the object to be used: key, value or entrie
     * @returns Resulting array
     */
    toArray : <T extends keyof ObjectData<O>>(dataType : T) => ObjectData<O>[T]

    /**
     * Joins all elements of an object separated by the specified separator string
     * @param dataType Object data to be joined: key, value or entrie
     * @param separator String that joins the data (optional)
     * @returns Resulting string
     */
    join : <T extends keyof ObjectData<O>>(dataType : T, separator ?: T extends 'entries' ? [string, string] | string : string) => string

    /**
     * Returns the first element that satisfies the test function or returns null
     * @param dataType Returned data type: key, value or entrie
     * @param handler Test function
     * @returns First element that passed the test or null
     */
    find : <T extends keyof ObjectInfo<O>>(dataType : T, handler : Expose<FindHandler<O>>) => ObjectInfo<O>[T] | null

    /**
     * Returns the last element that satisfies the test function or returns null
     * @param dataType Returned data type: key, value or entrie
     * @param handler Test function
     * @returns Last element that passed the test or null
     */
    findLast : <T extends keyof ObjectInfo<O>>(dataType : T, handler : Expose<FindHandler<O>>) => ObjectInfo<O>[T] | null

    /**
     * Returns the key of the first occurrence of a value in an object or null
     * @param value Value to be sought
     * @returns Key of element found or null
     */
    keyOf : (value : O[keyof O]) => keyof O | null

    /**
     * Returns the key of the last occurrence of a value in an object or null
     * @param value Value to be sought
     * @returns Key of element found or null
     */
    lastKeyOf : (value : O[keyof O]) => keyof O | null

    /**
     * Returns the value of an element of an object
     * @param key Element key
     * @returns Element value
     */
    valueOf : <K extends keyof O>(key : K) => O[K]

    /**
     * Original object elements
     * @returns object data
     */
    data : () => O

    /**
     * Adds or modifies the original object
     * @param assign Object to be concatenated
     * @returns Updated amount of elements in the original object
     */
    push : (assign : Partial<O>) => number

    /**
     * Number of elements in the original object
     */
    length : number

}

/**
 * Converts values from an array to a type
 */
export type ArrayValuesType<T extends ReadonlyArray<unknown>> = (
    T extends ReadonlyArray<infer ElementType>
        ? ElementType
        : never
)

/**
 * Forces intellisense to display the built-in types of a complex type
 */
export type Expose<T> = (
    T extends (...args: infer A) => infer R
        ? (...args: A) => R : T extends infer O
            ? { [K in keyof O]: O[K] } : T
);

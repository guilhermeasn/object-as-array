import every, { EveryHandler } from "./every";
import filter, { FilterHandler } from "./filter";
import forEach, { ForEachHandler } from "./forEach";
import map, { MapHandler } from "./map";
import some, { SomeHandler } from "./some";
import sort, { SortHandler } from "./sort";
import toArray, { DataType } from "./toArray";

import join from "./join";
import reverse from "./reverse";
import toString from "./toString";

export type objectAsArrayMethods<O extends object> = {
    filter   : (handler : FilterHandler<O>) => Partial<O>
    sort     : (handler : SortHandler<O>) => O
    some     : (handler : SomeHandler<O>) => boolean
    every    : (handler : EveryHandler<O>) => boolean
    forEach  : (handler : ForEachHandler<O>) => void
    map      : <R>(handler : MapHandler<O, R>) => R[]
    reverse  : () => O
    toString : () => string
    toArray  : <T extends keyof DataType<O>>(dataType : T) => DataType<O>[T]
    join     : <T extends keyof DataType<O>>(dataType : T, separator ?: T extends 'entries' ? [string, string] | string : string) => string
    length   : number
    object   : O
}

export default function objectAsArray<O extends object>(object : O) : objectAsArrayMethods<O> {

    return {
        filter:   handler => filter(object, handler),
        sort:     handler => sort(object, handler),
        some:     handler => some(object, handler),
        every:    handler => every(object, handler),
        forEach:  handler => forEach(object, handler),
        map:      handler => map(object, handler),
        reverse:  () => reverse(object),
        toString: () => toString(object),
        toArray:  dataType => toArray(object, dataType),
        join:     (dataType, separator) => join(object, dataType, separator),
        length:   Object.keys(object).length,
        object:   object
    }

}

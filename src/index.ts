import filter, { FilterHandler } from "./filter";
import forEach, { ForEachHandler } from "./forEach";
import map, { MapHandler } from "./map";
import sort, { SortHandler } from "./sort";
import toArray, { DataType } from "./toArray";
import toString from "./toString";

export type objectAsArrayMethods<O extends object> = {
    filter   : (handler : FilterHandler<O>) => Partial<O>
    sort     : (handler : SortHandler<O>) => O
    forEach  : (handler : ForEachHandler<O>) => void
    map      : <R>(handler : MapHandler<O, R>) => R[]
    toString : () => string
    toArray  : <T extends keyof DataType<O>>(dataType : T) => DataType<O>[T]
    length   : number
    object   : O
}

export default function objectAsArray<O extends object>(object : O) : objectAsArrayMethods<O> {

    return {
        filter:   handler => filter(object, handler),
        sort:     handler => sort(object, handler),
        forEach:  handler => forEach(object, handler),
        map:      handler => map(object, handler),
        toString: () => toString(object),
        toArray:  dataType => toArray(object, dataType),
        length:   Object.keys(object).length,
        object:   object
    }

}

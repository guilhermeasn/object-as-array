import filter, { FilterHandler } from "./filter";
import sort, { SortHandler } from "./sort";
import toArray, { dataType } from "./toArray";
import toString from "./toString";

export type objectAsArrayMethods<O extends object> = {
    filter   : (handler : FilterHandler<O>) => Partial<O>
    sort     : (handler : SortHandler<O>) => O
    // forEach  : (handler : ) => void
    toString : () => string
    toArray  : <T extends keyof dataType<O>>(dataType : T) => dataType<O>[T]
    length   : number
    object   : O
}

export default function objectAsArray<O extends object>(object : O) : objectAsArrayMethods<O> {

    return {
        filter:   handler => filter(object, handler),
        sort:     handler => sort(object, handler),
        toString: () => toString(object),
        toArray:  dataType => toArray(object, dataType),
        length:   Object.keys(object).length,
        object:   object
    }

}

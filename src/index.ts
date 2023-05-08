import filter, { FilterHandler } from "./filter";
import sort, { SortHandler } from "./sort";
import toArray, { dataType } from "./toArray";
import toString from "./toString";

export type objectAsArrayMethods<O extends Object> = {
    filter   : (handler : FilterHandler<O>) => Partial<O>
    sort     : (handler : SortHandler<O>) => O
    toString : () => string
    toArray  : <T extends keyof dataType<O>>(dataType : T) => dataType<O>[T]
    length   : number
    object   : O
}

export default function objectAsArray<O extends Object>(object : O) : objectAsArrayMethods<O> {

    return {
        filter:   handler => filter(object, handler),
        sort:     handler => sort(object, handler),
        toString: () => toString(object),
        toArray:  dataType => toArray(object, dataType),
        length:   Object.keys(object).length,
        object:   object
    }

}

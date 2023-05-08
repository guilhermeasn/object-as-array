import filter, { FilterHandler } from "./filter";
import sort, { SortHandler } from "./sort";

export type objectAsArrayMethods<O extends Object> = {
    filter : (handler : FilterHandler<O>) => Partial<O>,
    sort   : (handler : SortHandler<O>)   => O
}

export default function objectAsArray<O extends Object>(object : O) : objectAsArrayMethods<O> {

    return {
        filter: handler => filter(object, handler),
        sort: handler => sort(object, handler)
    }

}

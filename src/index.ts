import type { objectAsArrayMethods} from "./types";

import every from "./every";
import filter from "./filter";
import forEach from "./forEach";
import map from "./map";
import reduce from "./reduce";
import some from "./some";
import sort from "./sort";
import join from "./join";
import keyOf from "./keyOf";
import lastKeyOf from "./lastKeyOf";
import reduceRight from "./reduceRight";
import reverse from "./reverse";
import toString from "./toString";
import valueOf from "./valueOf";
import concat from "./concat";
import toArray from "./toArray";

export default function objectAsArray<O extends object>(object : O) : objectAsArrayMethods<O> {

    let length: number = Object.keys(object).length;

    function push(assign : Partial<O>) : number {
        object = { ...object, ...assign };
        length = Object.keys(object).length;
        return length;
    }

    return {
        filter:      handler => filter(object, handler),
        some:        handler => some(object, handler),
        every:       handler => every(object, handler),
        forEach:     handler => forEach(object, handler),
        map:         handler => map(object, handler),
        sort:        (dataType, handler) => sort(object, dataType, handler),
        reduce:      (handler, initial) => reduce(object, handler, initial),
        reduceRight: (handler, initial) => reduceRight(object, handler, initial),
        concat:      assign => concat(object, assign),
        reverse:     () => reverse(object),
        toString:    () => toString(object),
        toArray:     dataType => toArray(object, dataType),
        join:        (dataType, separator) => join(object, dataType, separator),
        keyOf:       value => keyOf(object, value),
        lastKeyOf:   value => lastKeyOf(object, value),
        valueOf:     key => valueOf(object, key),
        push,
        length,
        object
    }

}

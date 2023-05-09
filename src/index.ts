import type { ObjectAsArray } from "./types";

import concat from "./concat";
import every from "./every";
import filter from "./filter";
import find from "./find";
import findLast from "./findLast";
import forEach from "./forEach";
import join from "./join";
import keyOf from "./keyOf";
import lastKeyOf from "./lastKeyOf";
import map from "./map";
import reduce from "./reduce";
import reduceRight from "./reduceRight";
import reverse from "./reverse";
import some from "./some";
import sort from "./sort";
import toArray from "./toArray";
import toString from "./toString";
import valueOf from "./valueOf";

export default function objectAsArray<O extends object>(object : O) : ObjectAsArray<O> {

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
        find:        (dataType, handler) => find(object, dataType, handler),
        findLast:    (dataType, handler) => findLast(object, dataType, handler),
        keyOf:       value => keyOf(object, value),
        lastKeyOf:   value => lastKeyOf(object, value),
        valueOf:     key => valueOf(object, key),
        push,
        length,
        object
    }

}

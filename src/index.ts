import type { ObjectAsArray } from "./types";

import concat from "./concat";
import every from "./every";
import filter from "./filter";
import find from "./find";
import findLast from "./findLast";
import forEach from "./forEach";
import forEachAsync from "./forEachAsync";
import join from "./join";
import keyOf from "./keyOf";
import keysMap from "./keysMap";
import lastKeyOf from "./lastKeyOf";
import map from "./map";
import omit from "./omit";
import reduce from "./reduce";
import reduceRight from "./reduceRight";
import reverse from "./reverse";
import slice from "./slice";
import some from "./some";
import sort from "./sort";
import toArray from "./toArray";
import toString from "./toString";
import valueOf from "./valueOf";

/**
 * Create a functional object
 * @param object Original object
 * @returns Functional object methods
 */
export function objectAsArray<O extends object>(object : O) : ObjectAsArray<O> {

    let length: number = Object.keys(object).length;

    function push(assign : Partial<O>) : number {
        object = { ...object, ...assign };
        length = Object.keys(object).length;
        return length;
    }

    return {
        filter:       handler => filter(object, handler),
        some:         handler => some(object, handler),
        every:        handler => every(object, handler),
        forEach:      handler => forEach(object, handler),
        forEachAsync: handler => forEachAsync(object, handler),
        map:          handler => map(object, handler),
        keysMap:      handler => keysMap(object, handler),
        sort:         (dataType, handler) => sort(object, dataType, handler),
        reduce:       (handler, initial) => reduce(object, handler, initial),
        reduceRight:  (handler, initial) => reduceRight(object, handler, initial),
        slice:        (...keys) => slice(object, ...keys),
        omit:         (...keys) => omit(object, ...keys),
        concat:       assign => concat(object, assign),
        reverse:      () => reverse(object),
        toString:     expand => toString(object, expand),
        toArray:      dataType => toArray(object, dataType),
        join:         (dataType, separator) => join(object, dataType, separator),
        find:         (dataType, handler) => find(object, dataType, handler),
        findLast:     (dataType, handler) => findLast(object, dataType, handler),
        keyOf:        value => keyOf(object, value),
        lastKeyOf:    value => lastKeyOf(object, value),
        valueOf:      key => valueOf(object, key),
        data:         () => ({ ...object }),
        push,
        length
    }

}

export default objectAsArray;
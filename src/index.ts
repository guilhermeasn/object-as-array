import {
    DataType,
    InfoType
} from "./types";

import every, { EveryHandler } from "./every";
import filter, { FilterHandler } from "./filter";
import forEach, { ForEachHandler } from "./forEach";
import map, { MapHandler } from "./map";
import reduce, { ReduceHandler } from "./reduce";
import some, { SomeHandler } from "./some";
import sort, { SortHandler } from "./sort";

import join from "./join";
import keyOf from "./keyOf";
import lastKeyOf from "./lastKeyOf";
import reduceRight from "./reduceRight";
import reverse from "./reverse";
import toString from "./toString";
import valueOf from "./valueOf";
import concat from "./concat";
import toArray from "./toArray";

export type objectAsArrayMethods<O extends object> = {
    filter      : (handler : FilterHandler<O>) => Partial<O>
    some        : (handler : SomeHandler<O>) => boolean
    every       : (handler : EveryHandler<O>) => boolean
    forEach     : (handler : ForEachHandler<O>) => void
    map         : <R>(handler : MapHandler<O, R>) => R[]
    sort        : <T extends keyof InfoType<O>>(dataType : T, handler : SortHandler<O, T>) => O
    reduce      : <R = O[keyof O]>(handler : ReduceHandler<O, R>, initial ?: R) => R | undefined
    reduceRight : <R = O[keyof O]>(handler : ReduceHandler<O, R>, initial ?: R) => R | undefined
    concat      : <A extends object>(assign : A) => O & A
    reverse     : () => O
    toString    : () => string
    toArray     : <T extends keyof DataType<O>>(dataType : T) => DataType<O>[T]
    join        : <T extends keyof DataType<O>>(dataType : T, separator ?: T extends 'entries' ? [string, string] | string : string) => string
    keyOf       : (value : O[keyof O]) => keyof O | null
    lastKeyOf   : (value : O[keyof O]) => keyof O | null
    valueOf     : <K extends keyof O>(key : K) => O[K]
    push        : (assign : Partial<O>) => number
    length      : number
    object      : O
}

export default function objectAsArray<O extends object>(object : O) : objectAsArrayMethods<O> {

    function push(assign : Partial<O>) : number {
        object = { ...object, ...assign };
        return Object.keys(object).length;
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
        length:      Object.keys(object).length,
        object:      object
    }

}

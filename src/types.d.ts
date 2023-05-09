import type { EveryHandler } from "./every"
import type { FilterHandler } from "./filter"
import type { ForEachHandler } from "./forEach"
import type { MapHandler } from "./map"
import type { ReduceHandler } from "./reduce"
import type { SomeHandler } from "./some"
import type { SortHandler } from "./sort"

export type InfoType<O extends object> = {
    key    : keyof O,
    value  : O[keyof O],
    entrie : [keyof O, O[keyof O]]
}

export type DataType<O extends object> = {
    key    : Array<keyof O>,
    value  : Array<O[keyof O]>,
    entrie : Array<[keyof O, O[keyof O]]>
}

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
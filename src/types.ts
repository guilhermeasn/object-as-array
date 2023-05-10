import type { EveryHandler } from "./every"
import type { FilterHandler } from "./filter"
import type { FindHandler } from "./find"
import type { ForEachHandler } from "./forEach"
import type { MapHandler } from "./map"
import type { ReduceHandler } from "./reduce"
import type { SomeHandler } from "./some"
import type { SortHandler } from "./sort"

export type {
    EveryHandler,
    FilterHandler,
    FindHandler,
    ForEachHandler,
    MapHandler,
    ReduceHandler,
    SomeHandler,
    SortHandler
}

export type ObjectInfo<O extends object> = {
    key    : keyof O,
    value  : O[keyof O],
    entrie : [keyof O, O[keyof O]]
}

export type ObjectData<O extends object> = {
    key    : Array<keyof O>,
    value  : Array<O[keyof O]>,
    entrie : Array<[keyof O, O[keyof O]]>
}

export type ObjectAsArray<O extends object> = {
    filter      : (handler : FilterHandler<O>) => Partial<O>
    some        : (handler : SomeHandler<O>) => boolean
    every       : (handler : EveryHandler<O>) => boolean
    forEach     : (handler : ForEachHandler<O>) => void
    map         : <R>(handler : MapHandler<O, R>) => R[]
    keysMap     : <R>(handler : MapHandler<O, R>) => Record<keyof O, R>
    sort        : <T extends keyof ObjectInfo<O>>(dataType : T, handler : SortHandler<O, T>) => O
    reduce      : <R = O[keyof O]>(handler : ReduceHandler<O, R>, initial ?: R) => R | undefined
    reduceRight : <R = O[keyof O]>(handler : ReduceHandler<O, R>, initial ?: R) => R | undefined
    slice       : <K extends Array<keyof O>>(...keys : K) => Pick<O, ArrayValuesType<K>>
    splice      : <K extends Array<keyof O>>(changeOriginalObject : boolean, ...keys : K) => Omit<O, ArrayValuesType<K>>
    concat      : <A extends object>(assign : A) => O & A
    reverse     : () => O
    toString    : (expand ?: boolean | number) => string
    toArray     : <T extends keyof ObjectData<O>>(dataType : T) => ObjectData<O>[T]
    join        : <T extends keyof ObjectData<O>>(dataType : T, separator ?: T extends 'entries' ? [string, string] | string : string) => string
    find        : <T extends keyof ObjectInfo<O>>(dataType : T, handler : FindHandler<O>) => ObjectInfo<O>[T] | null
    findLast    : <T extends keyof ObjectInfo<O>>(dataType : T, handler : FindHandler<O>) => ObjectInfo<O>[T] | null
    keyOf       : (value : O[keyof O]) => keyof O | null
    lastKeyOf   : (value : O[keyof O]) => keyof O | null
    valueOf     : <K extends keyof O>(key : K) => O[K]
    data        : () => O
    push        : (assign : Partial<O>) => number
    length      : number
}

export type ArrayValuesType<T extends ReadonlyArray<unknown>> = (
    T extends ReadonlyArray<infer ElementType>
        ? ElementType
        : never
)
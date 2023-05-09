import type { ArrayValuesType } from "./types";

export default function splice<O extends object, K extends Array<keyof O>>(object : O, changeOriginalObject : boolean, ...keys : K) : Omit<O, ArrayValuesType<K>> {
    let r = changeOriginalObject ? object : { ...object };
    keys.forEach(key => delete r[key]);
    return r as Omit<O, ArrayValuesType<K>>;
}
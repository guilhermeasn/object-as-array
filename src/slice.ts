import type { ArrayValuesType } from "./types";

export default function slice<O extends object, K extends Array<keyof O>>(object : O, ...keys : K) : Pick<O, ArrayValuesType<K>> {
    let r = {} as O;
    keys.forEach(key => r[key] = object[key]);
    return r as Pick<O, ArrayValuesType<K>>;
}
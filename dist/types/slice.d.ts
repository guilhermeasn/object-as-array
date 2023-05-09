import type { ArrayValuesType } from "./types";
export default function slice<O extends object, K extends Array<keyof O>>(object: O, ...keys: K): Pick<O, ArrayValuesType<K>>;

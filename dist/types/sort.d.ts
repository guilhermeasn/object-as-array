import { ObjectInfo } from "./types";
export type SortHandler<O extends object, T extends keyof ObjectInfo<O>> = (a: ObjectInfo<O>[T], b: ObjectInfo<O>[T]) => number;
export default function sort<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: SortHandler<O, T>): O;

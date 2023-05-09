import { ObjectInfo } from "./types";
export type FindHandler<O extends object> = (value: O[keyof O], key: keyof O) => boolean;
export default function find<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: FindHandler<O>): ObjectInfo<O>[T] | null;

import type { FindHandler } from "./find";
import type { ObjectInfo } from "./types";
export default function findLast<O extends object, T extends keyof ObjectInfo<O>>(object: O, dataType: T, handler: FindHandler<O>): ObjectInfo<O>[T] | null;

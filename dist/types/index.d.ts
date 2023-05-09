import type { ObjectAsArray } from "./types";
export type * from './types';
export default function objectAsArray<O extends object>(object: O): ObjectAsArray<O>;

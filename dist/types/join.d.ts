import { DataType } from "./toArray";
export default function join<O extends object, T extends keyof DataType<O>>(object: O, dataType: T, separator?: T extends 'entries' ? [string, string] | string : string): string;

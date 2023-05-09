import { ObjectData } from "./types";
export default function join<O extends object, T extends keyof ObjectData<O>>(object: O, dataType: T, separator?: T extends 'entrie' ? [string, string] | string : string): string;

import { ObjectData } from "./types";
export default function toArray<O extends object, T extends keyof ObjectData<O>>(object: O, dataType: T): ObjectData<O>[T];

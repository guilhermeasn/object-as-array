import { ObjectInfo } from "./types";

export type SortHandler<O extends object, T extends keyof ObjectInfo<O>> = (a : ObjectInfo<O>[T], b : ObjectInfo<O>[T]) => number;

export default function sort<O extends object, T extends keyof ObjectInfo<O>>(object : O, dataType : T, handler : SortHandler<O, T>) : O {
    return <O>Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(
        dataType === 'key' ? ka : dataType === 'value' ? va : [ka, va],
        dataType === 'key' ? kb : dataType === 'value' ? vb : [kb, vb]
    )));
}

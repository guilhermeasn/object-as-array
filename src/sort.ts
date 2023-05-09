import { InfoType } from "./types";

export type SortHandler<O extends object, T extends keyof InfoType<O>> = (a : InfoType<O>[T], b : InfoType<O>[T]) => number;

export default function sort<O extends object, T extends keyof InfoType<O>>(object : O, infoType : T, handler : SortHandler<O, T>) : O {
    return <O>Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(
        infoType === 'key' ? ka : infoType === 'value' ? va : [ka, va],
        infoType === 'key' ? kb : infoType === 'value' ? vb : [kb, vb]
    )));
}

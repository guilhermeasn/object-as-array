export type SortType<O extends object> = {
    keys    : keyof O,
    values  : O[keyof O],
    entries : [keyof O, O[keyof O]]
}

export type SortHandler<O extends object, T extends keyof SortType<O>> = (a : SortType<O>[T], b : SortType<O>[T]) => number;

export default function sort<O extends object, T extends keyof SortType<O>>(object : O, dataType : T, handler : SortHandler<O, T>) : O {
    return <O>Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(
        dataType === 'keys' ? ka : dataType === 'values' ? va : [ka, va],
        dataType === 'keys' ? kb : dataType === 'values' ? vb : [kb, vb]
    )));
}

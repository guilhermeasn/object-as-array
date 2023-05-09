export type SortHandler<O extends object> = (valueA: O[keyof O], valueB: O[keyof O], keyA: keyof O, keyB: keyof O) => number;
export default function sort<O extends object>(object: O, handler: SortHandler<O>): O;

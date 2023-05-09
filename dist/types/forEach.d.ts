export type ForEachHandler<O extends object> = (value: O[keyof O], key: keyof O) => void;
export default function forEach<O extends object>(object: O, handler: ForEachHandler<O>): void;

export type MapHandler<O extends object, R> = (value: O[keyof O], key: keyof O) => R;
export default function map<O extends object, R>(object: O, handler: MapHandler<O, R>): R[];

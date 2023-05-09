export type ReduceHandler<O extends object, R> = (previousValue: R, currentValue: O[keyof O], currentKey: keyof O) => R;
export default function reduce<O extends object, R = O[keyof O]>(object: O, handler: ReduceHandler<O, R>, initial?: R): R | undefined;

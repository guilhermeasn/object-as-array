export type EveryHandler<O extends object> = (value: O[keyof O], key: keyof O) => boolean;
export default function every<O extends object>(object: O, handler: EveryHandler<O>): boolean;

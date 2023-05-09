export type FilterHandler<O extends object> = (value: O[keyof O], key: keyof O) => boolean;
export default function filter<O extends object>(object: O, handler: FilterHandler<O>): Partial<O>;

export type FilterHandler<O extends object> = (value : O[keyof O], key : keyof O) => boolean;

export default function filter<O extends object>(
    object : O,
    handler : FilterHandler<O>
) : Partial<O> {
    return Object.fromEntries(Object.entries(object).filter(([k, v]) => handler(v, k as keyof O))) as Partial<O>;
}

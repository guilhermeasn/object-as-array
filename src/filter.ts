export type FilterHandler<O extends Object> = (value : O[keyof O], key : keyof O) => boolean;

/**
 * Filtra um objeto de a acordo com a funcao de filtragem
 */
export default function filter<O extends Object>(
    object : O,
    handler : FilterHandler<O>
) : Partial<O> {
    return Object.fromEntries(Object.entries(object).filter(([k, v]) => handler(v, k as keyof O))) as Partial<O>;
}

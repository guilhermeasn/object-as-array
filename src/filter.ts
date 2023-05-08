
/**
 * Filtra um objeto de a acordo com a funcao de filtragem
 */
export default function filter<O extends Object>(
    object : O,
    handler : (value : O[keyof O], key : keyof O) => boolean
) : Partial<O> {
    return Object.fromEntries(Object.entries(object).filter(([k, v]) => handler(v, k as keyof O))) as Partial<O>;
}

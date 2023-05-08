
/**
 * Ordena um objeto de a acordo com a funcao de comparacao
 */
export default function sort<O extends Object>(
    object : O,
    handler : (valueA : O[keyof O], valueB : O[keyof O], keyA : keyof O, keyB : keyof O) => number
) : O {
    return <O>Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(va, vb, ka as keyof O, kb as keyof O)));
}

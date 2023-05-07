import type { ObjectData, ObjectDataType } from "./types";

/**
 * Ordena um objeto de a acordo com a funcao de comparacao
 */
export default function sort<O extends Object, K extends ObjectDataType>(
    object : O,
    dataType : K,
    handler : (a : ObjectData<O>[K], b: ObjectData<O>[K]) => number
) : O {
    return <O>Object.fromEntries(Object.entries(object).sort((dataA, dataB) => handler(
        dataType === 'keys' ? dataA[0] : dataType === 'values' ? dataA[1] : dataA,
        dataType === 'keys' ? dataB[0] : dataType === 'values' ? dataB[1] : dataB
    )));
}

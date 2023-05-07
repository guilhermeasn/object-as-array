import type { ObjectData, ObjectDataType } from "./types";

/**
 * Filtra um objeto de a acordo com a funcao de filtragem
 */
export default function filter<O extends Object, K extends ObjectDataType>(
    object : O,
    dataType : K,
    predicate : (data : ObjectData<O>[K]) => boolean
) : O {
    return <O>Object.fromEntries(Object.entries(object).filter(data => predicate(
        dataType === 'keys' ? data[0] :
        dataType === 'values' ? data[1] :
        data
    )));
}

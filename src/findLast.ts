import type { FindHandler } from "./find";
import type { ObjectInfo } from "./index";

import find from "./find";
import reverse from "./reverse";

/**
 * Returns the last element that satisfies the test function or returns null
 * @param object Object to be evaluated
 * @param dataType Returned data type: key, value or entrie
 * @param handler Test function
 * @returns Last element that passed the test or null
 */
export function findLast<O extends object, T extends keyof ObjectInfo<O>>(object : O, dataType : T, handler : FindHandler<O>) : ObjectInfo<O>[T] | null {
    object = reverse(object);
    return find(object, dataType, handler);
}

export default findLast;
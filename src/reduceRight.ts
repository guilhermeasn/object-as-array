import reduce, { ReduceHandler } from "./reduce";
import reverse from "./reverse";

/**
 * Calls the specified callback function for all the elements in an object reversed. The return value of
 * the callback function is the accumulated result, and is provided as an argument in the next
 * call to the callback function
 * @param object 
 * @param handler 
 * @param initial 
 * @returns 
 */
export default function reduceRight<O extends object, R = O[keyof O]>(object : O, handler : ReduceHandler<O, R>, initial ?: R) : R {
    object = reverse(object);
    return reduce(object, handler, initial);
}

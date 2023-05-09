import reduce, { ReduceHandler } from "./reduce";
import reverse from "./reverse";

export default function reduceRight<O extends object, R = O[keyof O]>(object : O, handler : ReduceHandler<O, R>, initial ?: R) : R {
    object = reverse(object);
    return reduce(object, handler, initial);
}

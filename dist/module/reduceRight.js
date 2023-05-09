import reduce from "./reduce";
import reverse from "./reverse";
export default function reduceRight(object, handler, initial) {
    object = reverse(object);
    return reduce(object, handler, initial);
}

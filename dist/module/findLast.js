import find from "./find";
import reverse from "./reverse";
export default function findLast(object, dataType, handler) {
    object = reverse(object);
    return find(object, dataType, handler);
}

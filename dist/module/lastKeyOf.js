import keyOf from "./keyOf";
import reverse from "./reverse";
export default function lastKeyOf(object, value) {
    object = reverse(object);
    return keyOf(object, value);
}

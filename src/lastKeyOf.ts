import keyOf from "./keyOf";
import reverse from "./reverse";

export default function lastKeyOf<O extends object>(object : O, value : O[keyof O]) : keyof O | null {
    object = reverse(object);
    return keyOf(object, value);
}

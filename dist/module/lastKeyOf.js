import reverse from "./reverse";
export default function lastKeyOf(object, value) {
    object = reverse(object);
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
    }
    return null;
}

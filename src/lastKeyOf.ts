import reverse from "./reverse";

export default function lastKeyOf<O extends object>(object : O, value : O[keyof O]) : keyof O | null {

    object = reverse(object);

    for(let key in object) {
        if(object[key] === value) {
            return key;
        }
    }

    return null;

}

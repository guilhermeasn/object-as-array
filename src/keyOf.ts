export default function keyOf<O extends object>(object : O, value : O[keyof O]) : keyof O | null {
    for(let key in object) {
        if(object[key] === value) {
            return key;
        }
    }
    return null;
}
export default function forEach(object, handler) {
    for (let key in object) {
        handler(object[key], key);
    }
}

export default function every(object, handler) {
    for (let key in object) {
        if (!handler(object[key], key)) {
            return false;
        }
    }
    return true;
}

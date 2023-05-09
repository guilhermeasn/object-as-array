export default function some(object, handler) {
    for (let key in object) {
        if (handler(object[key], key)) {
            return true;
        }
    }
    return false;
}

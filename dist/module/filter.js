export default function filter(object, handler) {
    const r = {};
    for (let key in object) {
        if (handler(object[key], key)) {
            r[key] = object[key];
        }
    }
    return r;
}

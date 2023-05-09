export default function keysMap(object, handler) {
    const r = {};
    for (let key in object) {
        r[key] = handler(object[key], key);
    }
    return r;
}

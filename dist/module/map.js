export default function map(object, handler) {
    const r = [];
    for (let key in object) {
        r.push(handler(object[key], key));
    }
    return r;
}

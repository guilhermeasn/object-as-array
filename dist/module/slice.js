export default function slice(object, ...keys) {
    let r = {};
    keys.forEach(key => r[key] = object[key]);
    return r;
}

export default function splice(object, changeOriginalObject, ...keys) {
    let r = changeOriginalObject ? object : Object.assign({}, object);
    keys.forEach(key => delete r[key]);
    return r;
}

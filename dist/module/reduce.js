export default function reduce(object, handler, initial) {
    let r = initial;
    for (let key in object) {
        if (typeof r === 'undefined')
            r = object[key];
        else
            r = handler(r, object[key], key);
    }
    return r;
}

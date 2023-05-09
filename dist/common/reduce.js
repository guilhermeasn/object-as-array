"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reduce(object, handler, initial) {
    let r = initial;
    for (let key in object) {
        if (typeof r === 'undefined')
            r = object[key];
        else
            r = handler(r, object[key], key);
    }
    return r;
}
exports.default = reduce;

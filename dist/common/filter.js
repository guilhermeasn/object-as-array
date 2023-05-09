"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(object, handler) {
    const r = {};
    for (let key in object) {
        if (handler(object[key], key)) {
            r[key] = object[key];
        }
    }
    return r;
}
exports.default = filter;

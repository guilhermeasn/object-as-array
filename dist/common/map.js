"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function map(object, handler) {
    const r = [];
    for (let key in object) {
        r.push(handler(object[key], key));
    }
    return r;
}
exports.default = map;

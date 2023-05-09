"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function slice(object, ...keys) {
    let r = {};
    keys.forEach(key => r[key] = object[key]);
    return r;
}
exports.default = slice;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splice(object, changeOriginalObject, ...keys) {
    let r = changeOriginalObject ? object : Object.assign({}, object);
    keys.forEach(key => delete r[key]);
    return r;
}
exports.default = splice;

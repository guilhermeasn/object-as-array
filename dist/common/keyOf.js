"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function keyOf(object, value) {
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
    }
    return null;
}
exports.default = keyOf;

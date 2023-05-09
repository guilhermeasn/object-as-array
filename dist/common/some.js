"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function some(object, handler) {
    for (let key in object) {
        if (handler(object[key], key)) {
            return true;
        }
    }
    return false;
}
exports.default = some;

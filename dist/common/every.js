"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function every(object, handler) {
    for (let key in object) {
        if (!handler(object[key], key)) {
            return false;
        }
    }
    return true;
}
exports.default = every;

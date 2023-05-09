"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(object, handler) {
    for (let key in object) {
        handler(object[key], key);
    }
}
exports.default = forEach;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(object, handler) {
    return Object.fromEntries(Object.entries(object).filter(([k, v]) => handler(v, k)));
}
exports.default = filter;

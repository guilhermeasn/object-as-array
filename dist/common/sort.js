"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sort(object, handler) {
    return Object.fromEntries(Object.entries(object).sort(([ka, va], [kb, vb]) => handler(va, vb, ka, kb)));
}
exports.default = sort;

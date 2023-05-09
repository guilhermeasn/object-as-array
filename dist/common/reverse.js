"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(object) {
    return Object.fromEntries(Object.entries(object).reverse());
}
exports.default = reverse;

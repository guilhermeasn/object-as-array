"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toString(object, expand = false) {
    return JSON.stringify(object, undefined, typeof expand === 'number' ? expand : !!expand ? 2 : undefined);
}
exports.default = toString;

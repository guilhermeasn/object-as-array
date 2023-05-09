"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toArray(object, dataType) {
    switch (dataType) {
        case 'key': return Object.keys(object);
        case 'value': return Object.values(object);
        default: return Object.entries(object);
    }
}
exports.default = toArray;

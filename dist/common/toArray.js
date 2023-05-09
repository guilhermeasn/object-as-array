"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toArray(object, dataType) {
    switch (dataType) {
        case 'keys': return Object.keys(object);
        case 'values': return Object.values(object);
        default: return Object.entries(object);
    }
}
exports.default = toArray;

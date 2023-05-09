"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function find(object, dataType, handler) {
    for (let key in object) {
        if (handler(object[key], key)) {
            return (dataType === 'key' ? key :
                dataType === 'value' ? object[key] :
                    [key, object[key]]);
        }
    }
    return null;
}
exports.default = find;

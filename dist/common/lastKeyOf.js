"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reverse_1 = __importDefault(require("./reverse"));
function lastKeyOf(object, value) {
    object = (0, reverse_1.default)(object);
    for (let key in object) {
        if (object[key] === value) {
            return key;
        }
    }
    return null;
}
exports.default = lastKeyOf;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keyOf_1 = __importDefault(require("./keyOf"));
const reverse_1 = __importDefault(require("./reverse"));
function lastKeyOf(object, value) {
    object = (0, reverse_1.default)(object);
    return (0, keyOf_1.default)(object, value);
}
exports.default = lastKeyOf;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const find_1 = __importDefault(require("./find"));
const reverse_1 = __importDefault(require("./reverse"));
function findLast(object, dataType, handler) {
    object = (0, reverse_1.default)(object);
    return (0, find_1.default)(object, dataType, handler);
}
exports.default = findLast;

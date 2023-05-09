"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reduce_1 = __importDefault(require("./reduce"));
const reverse_1 = __importDefault(require("./reverse"));
function reduceRight(object, handler, initial) {
    object = (0, reverse_1.default)(object);
    return (0, reduce_1.default)(object, handler, initial);
}
exports.default = reduceRight;
